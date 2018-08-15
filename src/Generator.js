const leftWords = require('../data/left_words');
const rightWords = require('../data/right_words');

const getRandomEntryFromArray = array => array[Math.floor(Math.random() * (array.length - 1))]

class Generate {
    randomName(){
        return `${getRandomEntryFromArray(leftWords)}-${getRandomEntryFromArray(rightWords)}`
    }
}

module.exports = Generate