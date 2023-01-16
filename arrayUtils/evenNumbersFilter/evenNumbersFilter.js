const numberAndEvenChecker = (num)=> {
  return (typeof(num)==='number' && num%2==0);
};

const evenNumbersCalculator = (numbers)=> {
  try {
    return numbers.filter(numberAndEvenChecker);
  } catch {
    throw new TypeError('Invalid data type');
  }
};

module.exports = { evenNumbersCalculator };

console.log(evenNumbersCalculator([1, 2, 3]));