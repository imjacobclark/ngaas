var assert 		= require('assert'),
    Generator 	= require('../lib/Generator');

describe('Generator', function(){
    describe('Generator.generateString()', function(){
        it('should return a string', function(){
            var generator 	= new Generator(),
            string 		= generator.generateString(generator);

            assert.equal( typeof string , "string" );
        });
    });
});