// callback це функція яку ми передаємо в іншу функцію як аргумент
// функція в яку ми передаємо callback називається функція вищого порядку

// function countSum (a, b){
//     const result = a + b
//     return result
// }

// function makeMessage(countSumCallBack) {
//     const res = countSumCallBack(1, 10);
//     const message = `Загальний результат функції вийшов ${res}`;
//     return message;
// }
// console.log(makeMessage(countSum))

// const countSum = (a, b) => a + b

// const makeMessage = (countSumCallBack) => `Загальний результат функції вийшов ${countSumCallBack(1, 10)}` 
// console.log(makeMessage(countSum))

// function countSum (a, b){
//     const result = a + b
//     return result
// }

// function multiplyNumbers (a, b) {
//     const result = a + b
//     return result 
// }

// function makeMessage(calculateCallBack, a, b) {
//     const res = calculateCallBack(a, b);
//     const message = `Загальний результат функції вийшов ${res}`;
//     return message;
// }
// console.log(makeMessage(countSum, 1, 3));
// console.log(makeMessage(countSum, 2, 11));
// console.log(makeMessage(multiplyNumbers, 2, 11));