/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
  return a + b;
}

const secondFunction = function (a, b) {
  return a + b;
};

// Function Declaration можно вызвать до объявления:
// console.log(firstFunction(2, 3));

// Function Expression нельзя вызвать до объявления:
// secondFunction(2, 7);
// ReferenceError: Cannot access 'secondFunction' before initialization

// Function Declaration можно переопределить:
// firstFunction = '123';

// Function Expression, объявленную через const,
// нельзя переназначить:
// secondFunction = true;
// TypeError: Assignment to constant variable.

console.log(firstFunction(2, 5));
console.log(secondFunction(5, 10));
