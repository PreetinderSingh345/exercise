const { sumTripledEvenNumbers } = require('./arrayUtils');

describe('Array utils', ()=> {
  describe('Triple number even filter', ()=> {
    it('should throw a type error with message \'Invalid data type\' when the input is not an array', ()=> {
      expect(()=> {
        sumTripledEvenNumbers('123');
      }).toThrow('Invalid data type');
    });

    it('should sum all the tripled even numbers when the input is an array of numbers', ()=> {
      const result=sumTripledEvenNumbers([2, 3, 4]);

      expect(result).toEqual(18);
    });

    it('should sum only the number entities for the tripled even values when the input array has numbers and other entities', ()=> {
      const result=sumTripledEvenNumbers([1, 4, '3', 4]);

      expect(result).toEqual(24);
    });
  });
});