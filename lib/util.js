/* jslint node: true */

'use strict';

var cfg = require('../config.json');

exports.addArticle = function(string) {
    return (/[aeiouAEIOU]/.test(string[0])) ? 'an ' + string : 'a ' + string;
};

exports.getDistance = function (p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

exports.getDirection = function (p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};

exports.clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
};


/*exports.angleDifference = function(a1, a2) {
    let diff1 = a2 - a1;
    while (diff1 >= 2*Math.PI) {
        diff1 -= 2*Math.PI;
    }
    while (diff1 < 0) {
        diff1 += 2*Math.PI;
    }
    let diff2 = a1 - a2;
    while (diff2 >= 2*Math.PI) {
        diff2 -= 2*Math.PI;
    }
    while (diff2 < 0) {
        diff2 += 2*Math.PI;
    }

    if (Math.abs(diff1) <= Math.abs(diff2)) { return diff1; }
    if (Math.abs(diff2) <= Math.abs(diff1)) { return diff2; }
};*/
exports.angleDifference = (() => {    
    let mod = function(a, n) {
        return (a % n + n) % n;
    };
    return (sourceA, targetA) => { 
        let a = targetA - sourceA;
        return mod(a + Math.PI, 2*Math.PI) - Math.PI;
    };
})();

exports.loopSmooth = (angle, desired, slowness) => {
    return exports.angleDifference(angle, desired)/slowness;
};

/*exports.loopClamp = function(angle, min, max) {
    angle = angle % (Math.PI * 2);
    min = min % (Math.PI * 2); if (min < 0) min += Math.PI * 2;
    max = max % (Math.PI * 2); if (max < 0) max += Math.PI * 2;
    let a = (max - min) % (Math.PI * 2); if (a < 0) a += Math.PI * 2;
    if (angle - min > a) return max;
    if (angle - min < 0) return min;
    return angle;
};*/


/*exports.pointInArc = function(point, givenAngle, allowedDifference) {
    let len = Math.sqrt(point.x * point.x + point.y * point.y);
    let norm = { x: point.x / len, y: point.y / len, };
    let vect = { x: Math.cos(givenAngle), y: Math.sin(givenAngle), };
    let dot = norm.x * vect.x + norm.y * vect.y;
    let a1 = Math.atan2(point.y, point.x);
    let a2 = Math.acos(dot);
    let diff = exports.angleDifference(a1, a2);
};*/

/*exports.isInArc = function(angle, arc) {
    return exports.loopClamp(angle, arc[0], arc[1]) == angle;
};*/

exports.deepClone = (obj, hash = new WeakMap()) => {
    let result;
    // Do not try to clone primitives or functions
    if (Object(obj) !== obj || obj instanceof Function) return obj;
    if (hash.has(obj)) return hash.get(obj); // Cyclic reference
    try { // Try to run constructor (without arguments, as we don't know them)
        result = new obj.constructor();
    } catch(e) { // Constructor failed, create object without running the constructor
        result = Object.create(Object.getPrototypeOf(obj));
    }
    // Optional: support for some standard constructors (extend as desired)
    if (obj instanceof Map)
        Array.from(obj, ([key, val]) => result.set(exports.deepClone(key, hash), 
                                                   exports.deepClone(val, hash)) );
    else if (obj instanceof Set)
        Array.from(obj, (key) => result.add(exports.deepClone(key, hash)) );
    // Register in hash    
    hash.set(obj, result);
    // Clone and assign enumerable own properties recursively
    return Object.assign(result, ...Object.keys(obj).map (
        key => ({ [key]: exports.deepClone(obj[key], hash) }) ));
};

exports.averageArray = arr => {
    if (!arr.length) return 0;    
    var sum = arr.reduce((a, b) => { return a + b; });
    return sum / arr.length;
};

exports.sumArray = arr => {
    if (!arr.length) return 0;    
    var sum = arr.reduce((a, b) => { return a + b; });
    return sum;
};


exports.signedSqrt = x => {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
};

exports.getJackpot = x => {
    return (x > 26300 * 1.5) ? Math.pow(x - 26300, 0.85) + 26300 : x / 1.5;
};

exports.serverStartTime = Date.now();
// Get a better logging function
exports.time = () => {
    return Date.now() - exports.serverStartTime;
};

// create a custom timestamp format for log statements

exports.log = text => {
    console.log('[' + (exports.time()/1000).toFixed(3) + ']: ' + text);
};
exports.warn = text => {
    console.log('[' + (exports.time()/1000).toFixed(3) + ']: ' + '[WARNING] ' + text);
};
exports.error = text => {
    console.log(text);
};
exports.remove = (array, index) => {    
    // there is more than one object in the container
    if(index === array.length - 1){
        // special case if the obj is the newest in the container
        return array.pop();
    } else {
        let o = array[index];
        array[index] = array.pop();
        return o;
    }
};