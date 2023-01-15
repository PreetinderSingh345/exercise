const {areAllDigitsSame, areAllDigitsSameArrow} = require('./checkAllDigitsSame')

test('simple function', ()=> {
    expect(areAllDigitsSame(1111)).toBe(true)
})

test('simple function', ()=> {
    expect(areAllDigitsSame(1234)).toBe(false)
})

test('arrow function', ()=> {
    expect(areAllDigitsSameArrow(2222)).toBe(true)
})

test('arrow function', ()=> {
    expect(areAllDigitsSameArrow(2345)).toBe(false)
})