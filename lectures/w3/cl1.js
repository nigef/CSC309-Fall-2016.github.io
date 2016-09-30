// An example of a simple closure

function foo() {
    var a = 2;
    
	// bar uses a, which it gets from its lexical scope
	// (Its lexical scope includes variables defined in foo)
    function bar() {
        console.log( a ); // 2
	}
	return bar;
}

var baz = foo();

// Because baz is now a reference to bar, it is calling bar
// The reference retains its lexical scope so a is still 2.
baz();

// The remainder of this example just shows taht you can
// invoke bar in other ways and the result is the same.
function c(fn) {
   fn();
}

var d = c(foo);
d();
