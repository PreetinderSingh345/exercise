const isEven = (num) => num%2==0;
const tripleValue = (num) => num*3;

const fetchTripledEvenNumbers = (numbers) => {
  try {
    numbers = numbers.map(tripleValue);

    numbers = numbers.filter(isEven);
      
    return numbers;
  }catch(err) {
    throw TypeError('Invalid data type');
  }
};

module.exports = { fetchTripledEvenNumbers };

console.log(fetchTripledEvenNumbers([1, 2, 3]));