const isEven = (num) => num%2==0;
const tripleValue = (num) => num*3;

const sumTripledEvenNumbers = (numbers) => {
  if(!Array.isArray(numbers)) {
    throw new Error('Invalid data type');
  }

  const sum = numbers
    .map(tripleValue)
    .filter(isEven)
    .reduce((val1, val2)=> val1+val2);

  return sum;
};

module.exports = { sumTripledEvenNumbers };

console.log(sumTripledEvenNumbers([1, 2, 3]));