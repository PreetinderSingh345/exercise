function concatenateWithoutFirstLetter(arr) {
  let firstChar, secondChar;

  [firstChar, secondChar]=arr;

  return (firstChar.slice(1).concat(secondChar.slice(1)));
}

const concatenateWithoutFirstLetterArrow =(arr)=> {
  let firstChar, secondChar;

  [firstChar, secondChar]=arr;

  return (firstChar.slice(1).concat(secondChar.slice(1)));
};

console.log(concatenateWithoutFirstLetter(['code', 'academy']));
console.log(concatenateWithoutFirstLetterArrow(['arrow', 'function']));

module.exports = {
  concatenateWithoutFirstLetter, 
  concatenateWithoutFirstLetterArrow
};