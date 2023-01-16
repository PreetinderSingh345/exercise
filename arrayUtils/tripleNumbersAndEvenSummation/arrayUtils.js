const isEven = (num) => num%2==0;
const tripleValue = (num) => num*3;

const sumTripledEvenNumbers = (numbers) => {
  try {
    const sum = numbers
      .map(tripleValue)
      .filter(isEven)
      .reduce((val1, val2)=> val1+val2);

    return sum;
  }catch(err) {
    throw TypeError('Invalid data type');
  }
};

module.exports = { sumTripledEvenNumbers };

console.log(sumTripledEvenNumbers([1, 2, 3]));