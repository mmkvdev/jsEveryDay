/*
	- Hoisting is JavaScript's default behavior of moving declarations to the top.
	
	- JavaScript Declarations are Hoisted

	- Variables and constants declared with let or const are not hoisted!

	- JavaScript only hoists declarations, not initializations.
*/

var bar;

function bar() {
	console.log('Cool');
}

bar();