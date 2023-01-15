const {isLeapYear, isLeapYearArrow} = require('./checkLeapYear')

test('simple function', ()=> {
    expect(isLeapYear(2000)).toBe(true)
})

test('simple function', ()=> {
    expect(isLeapYear(1992)).toBe(true)
})

test('arrow function', ()=> {
    expect(isLeapYear(1996)).toBe(true)
})

test('arrow function', ()=> {
    expect(isLeapYear(2016)).toBe(true)
})