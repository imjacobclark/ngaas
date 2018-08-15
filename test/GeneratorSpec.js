const assert = require('assert');
const Generator = require('../generator');

describe('Generator', function(){
    describe('Generator.', function(){
        it('should return a string', function(){
            var string = new Generator().randomName();

            assert.equal( typeof string , "string" );
        });
    });
});
