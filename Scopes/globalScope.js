// if you assign a value to a variable that's not been declared, it'll be automatically made as a global

function foo() {
	a = 20;
	var b = 100;
}

foo();

console.log(a);
console.log(b);