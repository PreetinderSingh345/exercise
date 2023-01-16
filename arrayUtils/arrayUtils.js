const doubleNumbers =(numbers)=> {
  if(!Array.isArray(numbers)) {
    return -1;
  }

  return numbers.map((num) => num*2);
};

module.exports = {doubleNumbers};