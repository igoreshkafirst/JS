/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3];

// OPTION 3
/* Подходит только для простых данных.
   Не сохраняет:
   - ссылки на объекты;
   - Date;
   - Map, Set;
   - функции;
   - undefined и др. */
const b = JSON.parse(JSON.stringify(a));

b.push('newElement');

console.log(a); // [1, 2, 3]

console.log(b); // [1, 2, 3, "newElement"]
