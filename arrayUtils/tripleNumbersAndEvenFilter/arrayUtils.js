const fetchTripledEvenNumbers = (numbers) => numbers.reduce((acc, item) => {
  if ((item * 3) % 2 === 0) {
    acc.push(item * 3);
  }

  return acc;
}, []);

module.exports = { fetchTripledEvenNumbers };

console.log(fetchTripledEvenNumbers([1, 2, 3]));