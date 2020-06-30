// In JS declaring a MultiDimensional Array is not possible, hence we need to create them manually (Ahh!!! Lovely)

// Array of Arrays - MultiDimensional Arrays
/*
Creating a multi-dimensional array of size 3*2
    0   1
0   a   b
1   c   d
2   e   f
*/

// Approach is fairly simple just create an array that is capable of holding elements of the size 3

const multiD = new Array(3);

// Now Loop through the multiD array and create an sub-array of size-2
for (let i = 0; i < multiD.length; i++) {
    multiD[i] = new Array(2);
}

// just manually assigned it and I don't kinda like it personally P.S.
multiD[0][0] = 'a';
multiD[0][1] = 'b';
multiD[1][0] = 'c';
multiD[1][1] = 'd';
multiD[2][0] = 'e';
multiD[2][1] = 'f';


console.table(multiD); // Ahh, let's see what console.table does in the later script.

// using forEach Loop
multiD.forEach(row => {
    row.forEach(col => {
        // console.log(col);
        // console.log(typeof col);
    })
});

// using for Loop
for (let i in multiD) {
    // console.dir(i);
    for(let j in multiD[i]) {
        // console.dir(j);
        console.dir(multiD[i][j]);
    }
}


