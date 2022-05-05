const processInput = require('../../src/index');
const moderateInput = require('../input/moderateInput');

describe('Can Process Input', () =>{
    it('Can handle moderate amount of input', () =>{
        moderateInput.forEach(mi => {
            expect(processInput(mi['input'])).toEqual(mi['results']);
        });
    })
});