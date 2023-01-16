const {endsWithScript, endsWithScriptArrow} = require('./checkEndsWithScript');

test('simple function', ()=> {
  expect(endsWithScript('Script')).toBe(true);
});

test('simple function', ()=> {
  expect(endsWithScript('script')).toBe(false);
});

test('arrow function', ()=> {
  expect(endsWithScriptArrow('doesEndWithScript')).toBe(true);
});

test('arrow function', ()=> {
  expect(endsWithScriptArrow('doesNotEndWithscript')).toBe(false);
});