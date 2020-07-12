// Looping is inspecting the elements in the array at each indexes

// Ahh dude I like to use `for` - a viking for loops

let brands = ["Apple", "Samsung", "Amazon", "FB"];

// looping
for(let i = 0; i< brands.length;i++) {
    console.log(brands[i]);
}

// for arrays in js we can also use for..of => it doesn't give the indexing feature - mostly enough and it's simple in cases where we only need the values compared to the indexing
for(let j of brands) {
    console.log(j);
}


// length - greatestNumericIndex+1
// length is an interesting property because we can truncate or clear the array values using it.

// increasing only does in augmenting the size of the array.
brands.length=6;
console.log(brands);

// decreasing will do much more, like crusing the entire array - destructive activity.
brands.length=3;
console.log(brands);

// probably we can fuck the entire to the ground by setting - 
brands.length=0;
console.log(brands);