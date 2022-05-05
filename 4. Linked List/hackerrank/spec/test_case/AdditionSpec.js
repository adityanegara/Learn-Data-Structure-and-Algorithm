const addition = require('../../src/test');

describe('Return addition', () => {
    
    it('Should return the sum of the parameter', () => {
      expect(addition(1, 2)).toEqual(3);
    }); 
})
  