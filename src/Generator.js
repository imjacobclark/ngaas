const words = require('../data/words');
const names = require('../data/names');

const getRandomEntryFromArray = array => array[Math.floor(Math.random() * (array.length - 1))]

class Generate {
    randomName(){
        return `${getRandomEntryFromArray(words)}-${getRandomEntryFromArray(names)}`
    }
}

module.exports = Generate