const doubleNumbers =(numbers)=> {
  try {
    return numbers.map((num) => num*2);
  } catch(err) {
    throw new TypeError('Invalid data type');
  } 
};

module.exports = {doubleNumbers};