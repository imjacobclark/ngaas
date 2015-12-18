var assert 		= require('assert'),
    generator 	= require('../generator');

describe('Generator', function(){
    describe('Generator.', function(){
        it('should return a string', function(){
            var string = generator();

            assert.equal( typeof string , "string" );
        });
    });
});
