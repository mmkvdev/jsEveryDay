/**
 * Here we assigned an anonymous function to a variable and then we use that variable to invoke the function by adding parantheses () at the end.
 */

const foo = function () {
    console.log('anonymous function');
    return 'anonymous function';
};

foo();

/**
 * Even though we assigned a named function to a variable, we can still use the variable to invoke the function.
 * Naming Will help in debugging the code,
 * but it won't change or affect the way we invoke it
 */
const bar = function A() {
    console.log('Named Functions');
};

bar();
