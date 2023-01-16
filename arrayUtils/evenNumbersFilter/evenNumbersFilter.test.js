const { evenNumbersCalculator } = require('./evenNumbersFilter');

describe('Array utils', ()=> {
  describe('Even numbers calculator', ()=> {
    it('should throw a type error with message \'Invalid data type\' when the input is not an array', ()=> {
      expect(()=> {
        evenNumbersCalculator('123');
      }).toThrow('Invalid data type');
    });

    it('should filter all the even numbers when the input is an array of numbers', ()=> {
      const result=evenNumbersCalculator([1, 2, 3]);

      expect(result).toEqual([2]);
    });

    it('should filter only the number entities for even values when the input array has numbers and other entities', ()=> {
      const result=evenNumbersCalculator([2, 4, '3', '$']);

      expect(result).toEqual([2, 4]);
    });
  });
});