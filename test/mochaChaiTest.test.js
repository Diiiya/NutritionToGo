var expect = require('chai').expect;
var assert = require('chai').assert;
//test variable
var numbers = [1,2,3,4,5];

//test if chai works properly
describe('Test Mocha & Chai', function() {
    describe('Array \'expect()\'-style', function() {
        it('is array and includes number 2', function() {
            expect(numbers).to.be.an('array').that.includes(2);
        })
        it('has length of 5', function() {
            expect(numbers).to.have.lengthOf(5);
        })
        xit('should skip this test', function() {
            expect(numbers).to.have.lengthOf(5);
        })
    })
    
    describe('Array \'assert\'-style', function() {
        it('is array', function() {
            assert.isArray(numbers, 'is array of numbers')
        })
        it('includes number 2', function() {
            assert.include(numbers, 2, 'array contains number 2')
        })
        xit('should skip this test', function() {
            assert.lengthOf(numbers, 5, 'array contains 5 numbers')
        })
    })
})