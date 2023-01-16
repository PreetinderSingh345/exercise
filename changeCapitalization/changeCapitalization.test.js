const {changeCaseOfString, changeCaseOfStringArrow} = require('./changeCapitalization');

test('simple function', ()=> {
  expect(changeCaseOfString('Change1234Demo')).toBe('cHANGE1234dEMO');
});

test('simple function', ()=> {
  expect(changeCaseOfString('demotestcase')).toBe('DEMOTESTCASE');
});

test('arrow function', ()=> {
  expect(changeCaseOfStringArrow('12321434')).toBe('12321434');
});

test('arrow function', ()=> {
  expect(changeCaseOfStringArrow('Nothing')).toBe('nOTHING');
});