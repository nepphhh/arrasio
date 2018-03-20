var gulp = require("gulp");
var babel = require("gulp-babel");
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");
var uglify = require("gulp-uglify");
var util = require("gulp-util");
var mocha = require("gulp-mocha");
var todo = require("gulp-todo");
var webpack = require("webpack-stream");
var fs = require("fs");
var rev = require("gulp-rev");
var replace = require("gulp-rev-replace");    
var clean = require("gulp-rev-dist-clean");
//var nodeInspector = require("gulp-node-inspector");
var rimraf = require('rimraf');
// Clear the old bin first

gulp.task("build", ["build-client", "build-server"]);   

gulp.task("clear-bin", function gulpRimraf() {
    rimraf.sync('bin', {}, function cb() { console.log('Old bin folder cleared.'); });
});  

gulp.task("build-server", ["clear-bin"], function gulpBuildServer() {
    return gulp.src(["src/server/**/*.*", "src/server/**/*.js"])
        .pipe(babel())
        .pipe(gulp.dest("bin/server/"));
});

gulp.task("build-client", ["move-client", "compile-client", "rev-rename", "rev-replace", "rev-clean"]);

gulp.task("move-client", ["clear-bin"], function gulpMoveClient() {
    return gulp.src(["src/client/**/*.*", "!client/js/*.js"])
        .pipe(gulp.dest("bin/client/"));
});

gulp.task("compile-client", ["move-client"], function gulpBuildClient() {
    return gulp.src(["src/client/js/app.js"])
        //.pipe(uglify())
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(babel({
            presets: [
            ["es2015", { "modules": false }]
            ]
        }))
        .pipe(gulp.dest("bin/client/js/"));
});

gulp.task("rev-rename", ["compile-client"], function gulpRevRename() {
    return gulp.src(["bin/client/**/*.html",
                "bin/client/**/*.css",
                "bin/client/**/*.js",
                "bin/client/**/*.json",
                "bin/client/**/*.{jpg,png,jpeg,gif,svg}"])
        .pipe(rev())
        .pipe(gulp.dest("bin/client/"))
        .pipe(rev.manifest({ path: "manifest.json" }))
        .pipe(gulp.dest("bin/manifest/"));
});

gulp.task("rev-replace", ["compile-client", "rev-rename"], function gulpRevReplace() {
    return gulp.src("bin/client/**/*.{css,js,html}")
        .pipe(replace({ manifest: gulp.src("bin/manifest/manifest.json"), }))
        .pipe(gulp.dest("bin/client/"));
});

gulp.task('rev-clean', ["compile-client", "rev-rename"], function gulpRevClean() {
    return gulp.src(['bin/client/**/*'], {read: false})
        .pipe(clean('bin/manifest/manifest.json'));
});

gulp.task("run", ["build"], function gulpRun() {
    nodemon({
        delay: 1000,
        script: "./server/server.js",
        cwd: "./bin/",
        args: ["config.json"],
        ext: "html js css"
    })
    .on("restart", function gulpRunOnRestart() {
        util.log("server restarted!");
    });
});

gulp.task("default", ["run"]);