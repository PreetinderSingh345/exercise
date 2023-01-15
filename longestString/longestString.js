function findLongestString(arr) {
    let longestStr="";

    arr.forEach(str => {
        longestStr=((str.length>longestStr.length)? str: longestStr);
    });

    return longestStr;
}

const findLongestStringArrow =(arr)=> {
    let longestStr="";

    arr.forEach(str => {
        longestStr=((str.length>longestStr.length)? str: longestStr);
    });

    return longestStr;
}

module.exports = {
    findLongestString,
    findLongestStringArrow
}