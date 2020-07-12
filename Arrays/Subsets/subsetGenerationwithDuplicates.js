// just a typical script to generate all possbile subsets from the given duplicate set of integers


var duplicateSubsetChecker = (nums) => {
    return nums.map(JSON.stringify).reverse().filter(function (e, i, a) {
        return a.indexOf(e, i+1) === -1;
    }).reverse().map(JSON.parse);
};

const subsetGenerator = (subsets) => {
    // console.log(subsets);
    let subset = [[]];
    subsets.sort();
    console.log(subsets);
    //console.log(subset);
    for (let i = 0; i < subsets.length; i++) {
        /*for(let j=0;j<subsets.length;j++) {
            subset.push([...subset[j],subsets[j]]);
        }*/
        subset.forEach((item) => {
            subset.push([...item, subsets[i]]);
        });
    }

    // checking for duplicates
    // console.log(duplicateSubsetChecker(subset));
    // return subset;

}

console.log(subsetGenerator([4,4,4,1,4]));

