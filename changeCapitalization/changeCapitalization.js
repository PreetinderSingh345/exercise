const letterPattern=/[a-zA-Z]/;

const isLetter =(char)=> char.match(letterPattern)!=null;

function changeCaseOfString(str) {
  let changedStr='';

  for(let char of str) {

    let charToAdd=isLetter(char)? ((char==char.toUpperCase())? char.toLowerCase(): char.toUpperCase()): char;

    changedStr+=charToAdd;
  }

  return changedStr;
}

const changeCaseOfStringArrow =(str)=> {
  let changedStr='';

  [...str].forEach(char => {
    let charToAdd=isLetter(char)? ((char==char.toUpperCase())? char.toLowerCase(): char.toUpperCase()): char;

    changedStr+=charToAdd;
  });

  return changedStr;
};

module.exports = {
  changeCaseOfString,
  changeCaseOfStringArrow
};