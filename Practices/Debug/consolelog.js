const foo = { name: 'a', age: 22, interests: 'Coding' };
const bar = { name: 'b', age: 23, interests: 'Coding' };
const baz = { name: 'c', age: 24, interests: 'Coding' };

/* Bad Code 👎 */

/* console.log(foo);
console.log(bar);
console.log(baz);
 */
/* debugging with the above way, doesn't show us what variables are being logged. 
Solution */

/* Optimised  */
// Computed Property Names => adding variables to an object, not only it reduces the code footprint, but also tell us which variable defined this data.

/* console.log('%c debugging', 'color: red; font-size: 20px');
console.log({ foo, bar, baz });
 */
// if objects share the common properties, may be we can display them in tables

console.table([foo, bar, baz]);
