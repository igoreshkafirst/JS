/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

function myFunction() {
  a = 2;
  console.log(a);
  return a;
}

const result = myFunction();
console.log(result);

console.log(a);
