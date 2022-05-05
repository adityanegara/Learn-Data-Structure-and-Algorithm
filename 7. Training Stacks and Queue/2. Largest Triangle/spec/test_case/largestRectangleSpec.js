const largestRectangle = require('../../src/index');
const moderateInput = require('../input/moderateInput');

describe('Can Return Largest Area Of Rectangle', () =>{
    it('Can handle moderate amount of input', () =>{
        moderateInput.forEach(mi => {
            expect(largestRectangle(mi['input'])).toEqual(mi['results']);
        });
    })
});