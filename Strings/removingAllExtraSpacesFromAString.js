const removingAllExtraSpacesFromAString = (str) => {
    //removing beginning and ending spaces
    // let str1 = str.trim();
    // console.log(str1);

    // let str2 = str.replace(/\s+/g, "")
    // console.log(str2);
    return str.replace(/\s+/g, "");

    //     console.log(str1);
}

removingAllExtraSpacesFromAString('a good  example');