const vowels=['a', 'e', 'i', 'o', 'u'];

function countVowelsInStr(str) {
    let count=0;

    [...str].forEach((char)=> {
        count+=((vowels.includes(char))? 1: 0);
    })

    return count;
}

const countVowelsInStrArrow =(str)=> {
    let count=0;

    [...str].forEach((char)=> {
        count+=((vowels.includes(char))? 1: 0);
    })

    return count;
}

console.log(countVowelsInStr('aeiou'));
console.log(countVowelsInStrArrow('thisisgreat'))