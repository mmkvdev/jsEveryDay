/* Passing a Function as an Argument */

function A() {
    return 'JS';
}

function B(A, name) {
    console.log(A() + name);
}

B(A, 'Power');

/* Note: 
    All we should understand is that JS treats function just like any other variable
    The important point to note is that the function that we pass as an argument to another function is called "Callback Function". */
