var duplicateArrayElementFilter = (nums) => {
    return nums.filter((v,i) => nums.indexOf(v) === i)
}