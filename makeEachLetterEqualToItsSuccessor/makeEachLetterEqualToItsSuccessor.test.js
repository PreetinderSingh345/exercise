const {makeEachLetterInStringEqualToItsLexicalSuccessor, makeEachLetterInStringEqualToItsLexicalSuccessorArrow} = require('./makeEachLetterEqualToItsSuccessor')

describe('no shift to start is there', ()=> {
    test('simple function', ()=> {
        expect(makeEachLetterInStringEqualToItsLexicalSuccessor('abcde')).toBe('bcdef')
    })

    test('arrow function', ()=> {
        expect(makeEachLetterInStringEqualToItsLexicalSuccessorArrow('ajh')).toBe('bki')
    })
})

describe('shift to start is there', ()=> {
    test('simple function', ()=> {
        expect(makeEachLetterInStringEqualToItsLexicalSuccessor('abz')).toBe('bca')
    })

    test('arrow function', ()=> {
        expect(makeEachLetterInStringEqualToItsLexicalSuccessorArrow('zza')).toBe('aab')
    })
})