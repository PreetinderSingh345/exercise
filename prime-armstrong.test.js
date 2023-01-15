const {checkArmstrong, checkPrime}=require('./prime-armstrong');

test('153 is armstrong number', ()=> {
    expect(checkArmstrong(153)).toBe(true);
});

test('370 is armstrong number', ()=> {
    expect(checkArmstrong(370)).toBe(true);
});

test('372 is not armstrong number', ()=> {
    expect(checkArmstrong(372)).toBe(false);
});

test('199 is not armstrong number', ()=> {
    expect(checkArmstrong(199)).toBe(false);
});

test('5 is prime number', ()=> {
    expect(checkPrime(5)).toBe(true);
})

test('11 is prime number', ()=> {
    expect(checkPrime(11)).toBe(true);
})

test('8 is not prime number', ()=> {
    expect(checkPrime(8)).toBe(false)
})

test('100 is not prime number', ()=> {
    expect(checkPrime(100)).toBe(false)
})