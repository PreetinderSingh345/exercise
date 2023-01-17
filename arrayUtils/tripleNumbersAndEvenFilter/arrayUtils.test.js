const { fetchTripledEvenNumbers } = require('./arrayUtils');

describe('Array utils', ()=> {
  describe('Triple number even filter', ()=> {
    it('should filter all the tripled even numbers when the input is an array of numbers', ()=> {
      const result=fetchTripledEvenNumbers([1, 2, 3]);

      expect(result).toEqual([6]);
    });

    it('should filter only the number entities for tripled even values when the input array has numbers and other entities', ()=> {
      const result=fetchTripledEvenNumbers([2, 4, '3', '$']);

      expect(result).toEqual([6, 12]);
    });
  });
});