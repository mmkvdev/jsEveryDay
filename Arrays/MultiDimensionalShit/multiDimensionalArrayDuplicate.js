// Input => nums -> [[1,1,1],[2,1,1],[1,2,3,],[1,1,1]]

var multiDimensionalDuplicateArrayFilter = (nums) => {
    return nums.map(JSON.stringify).reverse().filter(function (e, i, a) {
        return a.indexOf(e, i+1) === -1;
    }).reverse().map(JSON.parse);
}

// Output =>  [[2,1,1],[1,2,3,],[1,1,1]]]       