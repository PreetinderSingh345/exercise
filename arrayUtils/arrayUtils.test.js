const {doubleNumbers} = require('./arrayUtils');

describe('Array utils', ()=> {
  describe('Double numbers', ()=> {
    it('should return -1 when the input is not an array', ()=> {
      const result = doubleNumbers('abc');

      expect(result).toBe(-1);
    });

    it('should double the elements when the input is an array ', ()=> {
      const result=doubleNumbers([1, 2, 3]);

      expect(result).toEqual([2, 4, 6]);
    });
  });
});