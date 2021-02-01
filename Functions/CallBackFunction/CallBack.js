/**
 * A Callback function is a function passed into another function as an argument,
 * which is then invoked inside the outer function to perform some action or task.
 */

function A() {
    return 'Pass A Function';
}

function B(A, message) {
    return A() + message;
}

console.log(B(A, ' As An Argunment. '));

/**
 * The above example is a synchronous callback, as it is executed immediately.
 * Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.
 * A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects.
 * This structure is used in many modern web APIs, such as fetch().
 */
