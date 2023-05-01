import { expect } from 'chai';
import spiritistBooks from './index';

describe('spiritist-books', function () {
  describe('all', function () {
    it('should be an array of objects', function () {
      expect(spiritistBooks.all).to.satisfy(isArrayOfObjects);

      function isArrayOfObjects(array) {
        return array.every(function (item) {
          return typeof item === 'object';
        });
      }
    });
    it('should contain {title: Nosso Lar}', function () {
      expect(spiritistBooks.all).to.satisfy(includeThisObject);

      function includeThisObject(array) {
        if (
          array.find(function (item) {
            return item.title === 'Nosso Lar';
          })
        ) {
          return true;
        }
        return false;
      }
    });
  });
  describe('random', function () {
    it('should return a random item from the spiritistBooks.all', function () {
      var randomItem = spiritistBooks.random();
      expect(spiritistBooks.all).to.satisfy(includeThisRandomObject);

      function includeThisRandomObject(array) {
        if (
          array.find(function (item) {
            return item.name === randomItem.name;
          })
        ) {
          return true;
        }
        return false;
      }
    });
    it('should return and array of random items if passed a number', function () {
      var randomItems = spiritistBooks.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function (book) {
        expect(spiritistBooks.all).to.satisfy(includeThisRandObject);

        function includeThisRandObject(array) {
          if (
            array.find(function (obj) {
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
