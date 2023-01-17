const fetchTripledEvenNumbers = (numbers) => {
  const result  = numbers.reduce((acc, item)=> {
    if((item*3)%2===0) {
      acc.push(item*3);
    }

    return acc;
  }, []);

  return result;
};

module.exports = { fetchTripledEvenNumbers };

console.log(fetchTripledEvenNumbers([1, 2, 3]));