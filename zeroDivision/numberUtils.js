const divide = (a, b) => {
  if(typeof(a)!=='number' || typeof(b)!=='number') {
    throw new Error('Invalid data type');
  }
  
  if(b===0) {
    throw new Error('Cannot divide by zero');
  }

  return a/b;
};

module.exports = { divide };