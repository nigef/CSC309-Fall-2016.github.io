"use strict";

function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`”


function bar() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	bar: bar
};

var obj1 = {
	a: 2,
	obj2: obj2
}
obj1.obj2.bar();


// Explicit binding with call
foo.call(obj1);

// New binding
function baz(a) {
	this.a = a;
}

var zed = new baz( 2 );
console.log( zed.a ); // 2

//	Excerpt From: Kyle Simpson. “this & Object Prototypes.” iBooks. 
