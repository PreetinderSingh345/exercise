const {countVowelsInStr, countVowelsInStrArrow} = require('./countVowelsInString')

describe('all vowel', ()=> {
    test('simple function', ()=> {
        expect(countVowelsInStr('aeiou')).toBe(5);
    })

    test('arrow function', ()=> {
        expect(countVowelsInStrArrow('aei')).toBe(3)
    })
})

describe('vowel and consonant mix', ()=> {
    test('simple function', ()=> {
        expect(countVowelsInStr('aeiouTHRK')).toBe(5);
    })

    test('arrow function', ()=> {
        expect(countVowelsInStrArrow('great')).toBe(2)
    })
})