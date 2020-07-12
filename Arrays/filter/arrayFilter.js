// filtering is the new swag of removing elements from the given array

const filter_this_damn_array = (arr, val) => {
    return arr.filter(function(element){
        return element != val;
    });
    
}
let array_filter = ["Apple", "Google", "FB", "Amazon"];
console.log(array_filter,"Apple");
