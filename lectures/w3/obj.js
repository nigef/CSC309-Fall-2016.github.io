"use strict";

var x =-1;
var y = -1;

// distance from the origin
function dist_from_orig() {
    console.log(this.x);
    return(Math.sqrt(this.x * this.x + this.y* this.y));
}

// Creating objects through object literals
var p1 = { 
	x: 10,
	y: -6,
	dist_from_orig: dist_from_orig
};

var p2 = { 
	x: 4,
	y: 5,
	dist_from_orig: dist_from_orig
};

console.log(p1.dist_from_orig());
console.log(p2.dist_from_orig());

// Why doesn't the following work?
//var tmp = p1.dist_from_orig
//console.log(tmp());
//console.log(dist_from_orig());

// Create object using "new"
function Point(x, y) {
	this.x = x;
	this.y = y;
	this.dist = dist_from_orig;
}

var p3 = new Point(3,2);
console.log(p3);
console.log(p3.x);
console.log(p3.dist());

// You can add properties to objects!
p3.is_origin = function is_origin() {
    return this.x == 0 && this.y == 0;
}

if(p3.is_origin()) {
	console.log("origin");
} else {
    console.log("not orgin");
}
