/* Return a Function */

function A() {
    return function () {
        console.log('JS');
    };
}

/* Invoking the function */

// Step-1: Using a variable
const funcA = A();
funcA();

// Step-2: Using Double Parantheses
A()();

/* Note:
        A function that returns another function is called Higher Order Functions
*/
