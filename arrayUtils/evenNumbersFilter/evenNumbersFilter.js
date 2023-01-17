const numberAndEvenChecker = (num)=> {
  return (typeof(num)==='number' && num%2==0);
};

const evenNumbersCalculator = (numbers)=> {
  if(!Array.isArray(numbers)) {
    throw new Error('Invalid data type');
  }

  return numbers.filter(numberAndEvenChecker);
};

module.exports = { evenNumbersCalculator };

console.log(evenNumbersCalculator([1, 2, 3]));