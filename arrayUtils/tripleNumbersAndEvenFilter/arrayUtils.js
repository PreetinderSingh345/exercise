const isEven = (num) => num % 2 == 0;
const tripleValue = (num) => num * 3;

const fetchTripledEvenNumbers = (numbers) => {
  try {
    const tripledNumbers = numbers.map(tripleValue);
    const evenNumbers = tripledNumbers.filter(isEven);

    return evenNumbers;
  } catch (err) {
    throw TypeError('Invalid data type');
  }
};

module.exports = { fetchTripledEvenNumbers };

console.log(fetchTripledEvenNumbers([1, 2, 3]));