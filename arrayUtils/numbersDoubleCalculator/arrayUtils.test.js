const {doubleNumbers} = require('./arrayUtils');

describe('Array utils', ()=> {
  describe('Double numbers', ()=> {
    it('should throw a type error with message \'Invalid data type\' when the input is not an array', ()=> {
      expect(()=> {
        doubleNumbers('abc');
      }).toThrow('Invalid data type');
    });

    it('should double the elements when the input is an array ', ()=> {
      const result=doubleNumbers([1, 2, 3]);

      expect(result).toEqual([2, 4, 6]);
    });
  });
});