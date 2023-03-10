const {UnsupportedTypeError, } = require('../../errors');

const doubleNumbers =(numbers)=> {
  if(!Array.isArray(numbers)) {
    throw new UnsupportedTypeError('Invalid data type');
  }

  return numbers.map((num)=> num*2);  
};

console.log(doubleNumbers([1,2,3]));

module.exports = {doubleNumbers};