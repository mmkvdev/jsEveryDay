/**
 * Function As A Value
 */
function A() {
    return 'Pass A Function';
}

function B(A, message) {
    return A() + message;
}

console.log(B(A, ' As An Argunment. '));

/**
 * The Function that we pass as an argument to another function is called a Callback Function
 */
