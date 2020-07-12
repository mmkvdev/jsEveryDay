// script for handling arrays (kicking them in the nuts)

const main = () => {
    // Array - a data structure for storing elements in an ordered fashion or manner or whatever the fuck you want

    const demoArray = new Array(); // I Like CamelCase
    const againADemoArray = ["Apple", "Google", "Brain", "Ryan Dahl"]; // mostly used comfortable and mess :)

    // againADemoArray = [];

    // ahh we know that array elements are indexed
    console.log(againADemoArray[0]);
    // alert(againADemoArray[1]);

    // We can fucking replace any element in the array bruh!!!
    againADemoArray[1] = function() {
        console.log("JS is awesome");
    }

    // we can add a new one to the array too
    againADemoArray[4] = "I Love You Naveena";

    // array length is accessed with length attribute
    console.log(againADemoArray.length)

    // Basically arrays in JS are freaking awesome, they tend to store any datatype in them.
    // man I already wrote a similar kind of that,  that makes me awesome too. 
    console.log(againADemoArray[1]())

    console.log(againADemoArray);
}

main();