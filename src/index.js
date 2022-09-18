var spiritistBooks = require('./spiritist-books');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(spiritistBooks);

module.exports = {
  all: spiritistBooks,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
