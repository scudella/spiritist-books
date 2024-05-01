import { expect } from 'chai';
import spiritistBooks from './index.js';

describe('spiritist-books', () => {
  describe('all', () => {
    it('should be an array of objects', () => {
      function isArrayOfObjects(array) {
        return array.every((item) => {
          return typeof item === 'object';
        });
      }

      expect(spiritistBooks.all).to.satisfy(isArrayOfObjects);
    });

    it('should contain {title: Nosso Lar}', () => {
      function includeThisObject(array) {
        if (
          array.find((item) => {
            return item.title === 'Nosso Lar';
          })
        ) {
          return true;
        }
        return false;
      }

      expect(spiritistBooks.all).to.satisfy(includeThisObject);
    });
  });

  describe('random', () => {
    it('should return a random item from the spiritistBooks', () => {
      function includeThisRandomObject(array) {
        const randomItem = spiritistBooks.random();
        if (
          array.find((item) => {
            return item.name === randomItem.name;
          })
        ) {
          return true;
        }
        return false;
      }

      expect(spiritistBooks.all).to.satisfy(includeThisRandomObject);
    });

    it('should return an array of random items if passed a number', () => {
      const randomItems = spiritistBooks.random(3);

      expect(randomItems).to.have.length(3);

      randomItems.forEach((book) => {
        expect(spiritistBooks.all).to.satisfy(includeThisRandObject);

        function includeThisRandObject(array) {
          if (
            array.find((obj) => {
              return obj.name === book.name;
            })
          ) {
            return true;
          }
          return false;
        }
      });
    });
  });
});
