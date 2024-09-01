import { spiritistBooks } from './spiritist-books.js';

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

function uniqueRandomArray(array) {
  const random = consecutiveUniqueRandom(0, array.length - 1);
  return () => array[random()];
}

function randomInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function randomIntegerWithout(minimum, maximum, excludedValue) {
  const number = randomInteger(minimum, maximum - 1);

  return number >= excludedValue ? number + 1 : number;
}

function makeCallable(generator) {
  const iterator = generator();

  function random() {
    return iterator.next().value;
  }

  random[Symbol.iterator] = function* () {
    while (true) {
      yield random();
    }
  };

  return random;
}

function consecutiveUniqueRandom(minimum, maximum) {
  return makeCallable(function* () {
    if (minimum === maximum) {
      while (true) {
        yield minimum;
      }
    }

    let previousValue = randomInteger(minimum, maximum);
    yield previousValue;

    while (true) {
      previousValue = randomIntegerWithout(minimum, maximum, previousValue);
      yield previousValue;
    }
  });
}
