const {isLeapYear, isLeapYearArrow} = require('./checkLeapYear');

describe('Number utils', ()=> {
  describe('Regular function', ()=> {
    it('should return true when input is 2000', ()=> {
      expect(isLeapYear(2000)).toBeTruthy();
    });
    
    it('should return true when input is 1992', ()=> {
      expect(isLeapYear(1992)).toBeTruthy();
    });
  });
  
  describe('Arrow function', ()=> {
    it('should return false when input is 1997', ()=> {
      expect(isLeapYearArrow(1997)).toBeFalsy();
    });
    
    it('should return true when input is 2016', ()=> {
      expect(isLeapYearArrow(2016)).toBeTruthy();
    });
  });
});