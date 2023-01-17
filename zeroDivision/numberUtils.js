const { UnsupportedTypeError, DivisionByZeroError } = require('../errors');

const divide = (a, b) => {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    throw new UnsupportedTypeError('Invalid data type');
  }

  if (b === 0) {
    throw new DivisionByZeroError('Cannot divide by zero');
  }

  return a / b;
};

module.exports = { divide };