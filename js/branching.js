

// const userAge = prompt("Скільки вам років?")
// if (userAge > 17 ) {
// alert("Ви не ходите до шкіли!!!!")
// } else {
//     alert("Ви ходете до школи або вам менше 7 років")
// }

// Тернарний оператор

// умова ? те що виконається при true : те що виконається при false

// prompt("Скільки вам років?") > 17 ? alert("Ви не ходите до шкіли!!!!") :  alert("Ви ходете до школи або вам менше 7 років")

// Напиши скрипт обробки покупки в магазині. 
//   - Баланс користувача зберігається в змінній balance - отримати з інпуту
//   - Сумма покупки зберігається в змінній payment - отримати з інпуту
//   - Перед перевіркою вивести повідомлення на екран:
//   «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість 
//   доступних коштів на рахунку»
//  - Якщо сума покупки не перевищує баланс:
//      - Відняти з балансу суму покупки
//    - Вивести повідомлення «На рахунку залишилося [число] кредитів»
// - Якщо сума покупки перевищує баланс:
//     - Вивести повідомлення «На рахунку недостатньо коштів для проведення операції!»
//  - В кінці вивести повідомлення «Операція завершена»

// const balance = Number(prompt("Який у вас баланс?"));
// console.log(balance)

// const payment = Number(prompt("За скільки ви купите кросівки?"));

// alert("Загальна вартість замовлення "+ payment +" кредитів. Перевіряємо кількість доступних коштів на рахунку")

// if (payment < balance) {
//     balance -= payment
//     alert("Дякую за покупку!")
// } else {
//     alert("У вас не достатньо коштів на рахунку!")
// }
// alert("Операція завершена!")
// console.log(balance)


// if (hotelStars === 1 ) {
//     alert("Кімната в цьому готелі буде коштувати 20$")
// } else if (hotelStars === 2 ) {
//     alert("Кімната в цьому готелі буде коштувати 30$")
// } else if (hotelStars === 3 ) {
//     alert("Кімната в цьому готелі буде коштувати 50$")
// } else if (hotelStars === 4 ) {
//     alert("Кімната в цьому готелі буде коштувати 70$")
// } else if (hotelStars === 5 ) {
//     alert("Кімната в цьому готелі буде коштувати 120$")
// } else {
//     alert("Такої кількості зірок немає")

//--------------------------------------------------------------//

// switch (змінна що порівнюємо) {
//     case значення з яким порівнюємо :
//     інструкція яку треба виконати якщо case-true;
//     break;
//     case значення з яким порівнюємо :
//     інструкція яку треба виконати якщо case-true;
//     break;
//     default:
//     інструкція
// }

// switch (hotelStars) {
//     case 1 :
//     alert("Кімната в цьому готелі буде коштувати 20$");
//     break;
//     case 2 :
//     alert("Кімната в цьому готелі буде коштувати 30$");
//     break;
//     case 3 :
//     alert("Кімната в цьому готелі буде коштувати 50$");
//     break;
//     case 4 :
//     alert("Кімната в цьому готелі буде коштувати 70$");
//     break;
//     case 5 :
//     alert("Кімната в цьому готелі буде коштувати 120$");
//     break;

// }

// if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert('Ми підтримуємо і ці браузери' );
//   } else {
//     alert('Маємо надію, що ця сторінка виглядає добре!' );
//   }


//   switch (browser) {
//     case  "Edge" :
//     alert("You've got the Edge!");
//     break;
//     case "Chrome" :
//     case "Firefox" :
//     case "Safari" :
//     case "Opera" :    
//     alert("Ми підтримуємо і ці браузери");
//     break;
//     default:
//     alert('Маємо надію, що ця сторінка виглядає добре!' );
//   }

//   Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції.
//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//             - 'Посилка буде відправлена сьогодні'
//             - 'Вам передзвонить менеджер'.


// let option = Number(prompt("Виберіть опцію доставки товару: 1 - самовивіз, 2 - курєр, 3 - пошта."))

// switch (option) {
//     case 1 :
//     alert("Ви зможете забрати товар завтра з 12:00 в нашому офісі");
//     break;
//     case 2 :
//     alert("Курєр доставить замовлення завтра з 9:00 до 18:00");
//     break;
//     case 3 :
//     alert("Посилка буде відправлена сьогодні");
// }
// alert("Вам передзвонить менеджер");

// Цикл for з лічильником 
// for (let i = 0; i < 5; i = i + 1) {
// console.log(`Це число ${i}`);
// }


// Крок 1
// Запускаємо цикл та ініціалізуємо його через let i = 0
// Крок 2
// Вказуємо доки має тривати цикл в умові i < 5 та перевіряємо її на true
// На даному етапі i < 5 це 0 < 5 тому буде true
// Крок 3
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(`Це число ${0}`);
// Крок 4
// Збільшуємо ітерацію i = i + 1, тобто i = 0 + 1, тобто вийде i = 1
// Крок 5
// Тепер в i лежить 1 і ми перевіряємо умову на другому колі i < 5, тобто 1 < 5 це буде true
// Крок 6
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(`Це число ${1}`);
// Крок 7
// Збільшуємо ітерацію i = i + 1, тобто i = 1 + 1, тобто вийде i = 2
// Крок 8
// Тепер в i лежить 2 і ми перевіряємо умову на другому колі i < 5, тобто 2 < 5 це буде true
// Крок 9
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(`Це число ${2}`);
// Крок 10
// Збільшуємо ітерацію i = i + 1, тобто i = 2 + 1, тобто вийде i = 3
// Крок 11
// Тепер в i лежить 3 і ми перевіряємо умову на другому колі i < 5, тобто 3 < 5 це буде true
// Крок 12
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(`Це число ${3}`);
// Крок 13
// Збільшуємо ітерацію i = i + 1, тобто i = 3 + 1, тобто вийде i = 4
// Крок 14
// Тепер в i лежить 4 і ми перевіряємо умову на другому колі i < 5, тобто 4 < 5 це буде true
// Крок 15
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(`Це число ${4}`);
// Крок 16
// Збільшуємо ітерацію i = i + 1, тобто i = 4 + 1, тобто вийде i = 5
// Крок 17
// Тепер в i лежить 5 і ми перевіряємо умову на другому колі i < 5, тобто 5 < 5 це буде false
// Крок 18
// Оскільки в умові false, тому не виконується тіло циклу і цикл завершується


// // Цикл While
// for (let i = 0; i < 90; i = i + 3) {
//     console.log(`Це число ${i}`)
// }
// const year = prompt("Який ваш вік?")
// while (year < 18) {
//     alert (`Вам ${year} років`)
//     year ++
// };


// // Цикл do While
// let savePas = 630431;
// let pas;
// do{
//     pas = Number(prompt("Введіть пароль"))
// }while (pas !== savePas)

// Oператор break
// for (let i = 1; i <= 100; i += 1) {
//     console.log(i)
//     if (i === 33) {
//         alert ("Ми знайшли 33")
//         break
//     }
// }


// for (let i = 1; i <= 100; i += 2) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 3; i <= 100; i += 5) {
//     console.log(i)
// }

