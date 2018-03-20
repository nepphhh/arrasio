/* jshint esversion: 6*/
const PointClosure = (() => {
    const getdist = points => {
        return Math.sqrt(
            Math.pow(points.x0 - points.x1, 2) + 
            Math.pow(points.y0 - points.y1, 2)
        );
    };
    return () => {
        let points = {
            x0: Math.random(),
            y0: Math.random(),
            x1: Math.random(),
            y1: Math.random()
        };
        return {
            distance: () => getdist(points),
        };
    };
})();

function PointProto() {
    this.points = {
        x0: Math.random(),
        y0: Math.random(),
        x1: Math.random(),
        y1: Math.random()
    };
}  
PointProto.prototype.distance = function distance() {
    return Math.sqrt(
        Math.pow(this.points.x0 - this.points.x1, 2) + 
        Math.pow(this.points.y0 - this.points.y1, 2)
    );
};

const PointHybrid = (() => {
    function Obj(points) {
        this.__internal = {
            points: points,
        };
    }
    Obj.prototype.distance = () => {
        const points = this.__internal.points;
        return Math.sqrt(
            Math.pow(points.x0 - points.x1, 2) + 
            Math.pow(points.y0 - points.y1, 2)
        );
    };
    return () => {
        const points = {
            x0: Math.random(),
            y0: Math.random(),
            x1: Math.random(),
            y1: Math.random()
        };
        return new Obj(points);
    };
})();


const iter = 1000000;
var points = [];

let t1 = (new Date()).getTime();
for (var i=0; i<iter; i++) points.push(new PointProto());
console.log(points.reduce((a, p) => a += p.distance(), 0) / points.length);
console.log((new Date()).getTime() - t1);

points.length = 0;

let t2 = (new Date()).getTime();
for (var i=0; i<iter; i++) points.push(PointClosure());
console.log(points.reduce((a, p) => a += p.distance(), 0) / points.length);
console.log((new Date()).getTime() - t2);

points.length = 0;

let t3 = (new Date()).getTime();
for (var i=0; i<iter; i++) points.push(PointHybrid());
console.log(points.reduce((a, p) => a += p.distance(), 0) / points.length);
console.log((new Date()).getTime() - t3);
