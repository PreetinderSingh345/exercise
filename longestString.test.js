const {findLongestString, findLongestStringArrow} = require("./longestString")

test('simple function', ()=> {
    expect(findLongestString(["this", 'is', 'great'])).toBe('great');
})

test('arrow function', ()=> {
    expect(findLongestStringArrow(["we", "love", "code", 'academy'])).toBe('academy');
})