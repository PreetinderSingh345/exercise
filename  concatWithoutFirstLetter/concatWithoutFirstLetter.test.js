const {concatenateWithoutFirstLetter, concatenateWithoutFirstLetterArrow} = require('./concatWithoutFirstLetter');

test('simple function', ()=> {
  expect(concatenateWithoutFirstLetter(['code', 'academy'])).toBe('odecademy');
});

test('simple function', ()=> {
  expect(concatenateWithoutFirstLetter(['this', 'is'])).toBe('hiss');
});

test('arrow function', ()=> {
  expect(concatenateWithoutFirstLetterArrow(['not', 'sure'])).toBe('oture');
});

test('arrow function', ()=> {
  expect(concatenateWithoutFirstLetterArrow(['very', 'good'])).toBe('eryood');
});