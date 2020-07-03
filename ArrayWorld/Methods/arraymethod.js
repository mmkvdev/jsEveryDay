/* to describe the array methods, you need to understand about stack and queue datastructures

    - Stack (LIFO) => push , pop
    - Queue (FIFO) => push, shift

Arrays in JS do both the operations - deque i.e, then add/remove elements both to/from the beginning or the end.
*/

// Methods that work with the end of the array
let brands = ["Apple", "Goolge", "FB", "Amazon"];

// pop - extracts the last element of the array and returns it.
console.log('pop',brands.pop());
console.log(brands);

// push - appends the element at the end of the array and returns the length of the array 
console.log('push',brands.push("Amazon"));
console.log(brands);

// Methods that work at the beginning of an array

// shift - extracts the first element of the array and returns it.
console.log('shift',brands.shift());
console.log(brands);

// unshift - add the element to the beginning of the array and returns the length of the array.
console.log('unshift',brands.unshift("Apple"));
console.log(brands);    


// Methods that allow multiple insertions at once.
// push - unshift

// push
console.log('push',brands.push("Airbnb", "Paytm"));
console.log(brands);

// unshift
console.log('unshift',brands.unshift("Walmart", "Uber"));
console.dir(brands);

/* 
    Performance of each methods 
        - push and pop are blazing fast cause they don't need to update anything. They just clean the index and update the length
        - where as shift and unshift have to first remove the element from the index 0 and then update the indexes of the remaining elements (decreasing) and finally updating the ``length`` property.
        
*/
