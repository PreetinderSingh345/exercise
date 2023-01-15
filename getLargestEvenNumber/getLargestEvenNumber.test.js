const {getBiggestEvenNumInArr, getBiggestEvenNumInArrArrow} = require('./getLargestEvenNumber')

test('simple function', ()=> {
    expect(getBiggestEvenNumInArr([1, 2, 3, 4])).toBe(4)
})

test('simple function', ()=> {
    expect(getBiggestEvenNumInArr([1, 3, 5, 7])).toBe(-1)
})

test('arrow function', ()=> {
    expect(getBiggestEvenNumInArrArrow([-2, 1, 3, 5])).toBe(-2)
})

test('arrow function', ()=> {
    expect(getBiggestEvenNumInArrArrow([-1, 3, 5, 10])).toBe(10)
})