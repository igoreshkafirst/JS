/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5;
const b = 10;

if (b > a) {
  let c = 2;
  c = a + b + c;
  /* Если заменить "let" на "var":
  
     var c = 2;
  
     то первая ошибка тоже исчезнет,
     но переменная станет доступна вне блока,
     поэтому console.log(c) после блока
     уже не вызовет ReferenceError.
  
     Именно поэтому здесь используется let. */

  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  console.log(c);
  // 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined
