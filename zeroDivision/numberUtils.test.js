const { divide } = require('./numberUtils');

describe('Number utils', () => {
  describe('Divide', () => {
    it('should throw an error when both the input are not numbers', () => {
      expect(()=> {
        divide('a', 3);
      }).toThrow('Invalid data type');
    });

    it('should throw an error when the divisor is zero', () => {
      expect(()=> {
        divide(2, 0);
      }).toThrow('Cannot divide by zero');
    });

    it('should return the quotient when both the input are numbers', () => {
      const result = divide(1, 2);

      expect(result).toBeCloseTo(0.5);
    });
  });
});