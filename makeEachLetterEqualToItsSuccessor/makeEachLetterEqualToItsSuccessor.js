function makeEachLetterInStringEqualToItsLexicalSuccessor(str) {
  let convertedString='';

  [...str].forEach((char)=> {
    let lexicallyNextChar=String.fromCharCode(((char.charCodeAt()-96)%26)+97);

    convertedString+=lexicallyNextChar;
  });

  return convertedString;
}

const makeEachLetterInStringEqualToItsLexicalSuccessorArrow =(str)=> {
  let convertedString='';

  [...str].forEach((char)=> {
    let lexicallyNextChar=String.fromCharCode(((char.charCodeAt()-96)%26)+97);

    convertedString+=lexicallyNextChar;
  });

  return convertedString;
};

console.log(makeEachLetterInStringEqualToItsLexicalSuccessor('codeacademy'));
console.log(makeEachLetterInStringEqualToItsLexicalSuccessorArrow('lazyinterns'));

module.exports = {
  makeEachLetterInStringEqualToItsLexicalSuccessor,
  makeEachLetterInStringEqualToItsLexicalSuccessorArrow
};