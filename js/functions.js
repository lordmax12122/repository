// Функція це обгортка інструкцій які стосуються однієї дії; їх створюємо для повторного використання коду

// Є два способи створення функції:

// 1 Спосіб
// Створення(Оголошення) функції - function declaration

// function назва функції (параметри) {
//  тіло функції
//  return значення яке має повернути функцію як результат
// }

// Виклик Функції:
// назваФункції()

// function test(){
//     console.log("Моя перша функція")
// }

// test()

// function countSum(number1, number2){
// const result = number1 + number2
// const message = `загальна сума чисел вийшла ${result}`;
// return message;
// }

// const sum = countSum(7, 110)
// console.log(sum)
// console.log(countSum(7, 110))

// Напиши функцію яка повертає буль як результат перевірки числа на парність:

// console.log(isEven(4)); // true
// console.log(isEven(3)); // false
//  У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isEven(4));
// console.log(isEven(3));

// const isEven = (number) => number % 2 === 0

// function findMaxNum(array) {
//     for (let i = 0; i < array.length; i++)
//         console.log(array[i])
//         if (array[i] > max) {
//             max > array[i]
//         }
//         return max;
// }
// let array = [1, 3, 2, 5, 4, 84];
// const max = findMaxNum(array)
// console.log(max)

// function hello1() {
//     const message = `Привіт JavaScript`
//     return message;
// }
// console.log(hello1())

// 2 спосіб створення функції це функціональний вираз (function expresion)


// const назваФункції = function (параметри) {
//  тіло функції
//  return значення яке має повернути функцію як результат
// }

// Виклик Функції:
// назваФункції()

// const test = function(){
//     console.log("Моя перша функція")
// }

// test();

// 3 спосіб - стрілкові функції який дозволяє написати функцію максимально коротко

// const test = () => {
//     return "My first function";
// }; Тут явне повернення бо є return

// test();
// стрілкову функцію можна скоротити через неявне повернення(без return)

// const test = () => "My first function";

// ПРАКТИКА
// Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу.
// function mul(n, m) {
//   const numberMultiply = n * m;
//   const numberSum = n + m;
//   const numberDifference = n - m;
//   const message = `Добуток цих чисел дорівнює ${numberMultiply}, Сума цих чисел дорівнює ${numberSum}, Різниця цих чисел дорівнює ${numberDifference}`;
//   return message;
// }

// function mul(n, m) {
//     return `Добуток цих чисел дорівнює ${n * m}, Сума цих чисел дорівнює ${n + m}, Різниця цих чисел дорівнює ${n - m}`;
// }

// const mul = (n, m) => `Добуток цих чисел дорівнює ${n * m}, Сума цих чисел дорівнює ${n + m}, Різниця цих чисел дорівнює ${n - m}`;
// console.log(mul(11, 23))

// Якщо у функцію приходить різна кількість аргументів, то ми можемо використовувати псевдо-масив arguments

// function multiplyNumbers(a, b, c) {
//     return a * b * c
// }
// console.log(multiplyNumbers(5, 4))
// console.log(multiplyNumbers(5, 4, 3))
// Так працювати не буде, оскільки кількість аргументів і параметрів не співпадають

// Тому ми використаємо псевдомасив arguments
// function multiplyNumbers() {
//     // console.log(arguments)
//     const numbers = Array.from(arguments)
//     let result = 1;
//     for(let i = 0; i < numbers.length; i++) {
//     result = numbers[i] * result
//     }
//     return result
// }
// console.log(multiplyNumbers(5, 4))
// console.log(multiplyNumbers(5, 4, 10))

// const birds = ["Goose", "Turkey", "Colibri", "Anaconda"]
// function findFilteredBirds(birds) {
//     const filterBirds = []
//     for(let i = 0; i < birds.length; i++) {
//         if(birds[i].length > 6) {
//             filterBirds.push(birds[i])
//         }
//     }

//     return filterBirds
// }
// console.log(findFilteredBirds(birds))
