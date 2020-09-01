/*     Assign a Function to a variable     */

const assignYourShit = function () {
    console.log('Assigned your shit as a variable');
};

/* All we fucking did is assigned an anonymous function to a variable and later used that variable to invoke that function */
assignYourShit();

/* Note: 
    Even if the function is named, we can use the variable to invoke. 
    But this approach will aid in debugging rather than the anonymous approach. 
    It won't affect the way we invoke it. */
