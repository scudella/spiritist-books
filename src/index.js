import { spiritistBooks } from './spiritist-books.js';
import uniqueRandomArray from 'unique-random-array';
const getRandomItem = uniqueRandomArray(spiritistBooks);

export default {
  all: spiritistBooks,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
