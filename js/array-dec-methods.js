// // Синтаксис перебираючих методів
// назваМасиву.назваМетоду((елементМасиву, індексМасиву, масив) => {
//     тут вказуєм що ми робимо з кожним елементом масиву
//     return результат
// });

// Метод forEach є заміною циклу тобто перебирає масив, робить щось з кожним елементом і нічого не повертає; може мутувати вихідні дані

// const friends = ['Max', 'Markiyan', 'Rafik']

// friends.forEach((friend, friendIndex) => {
//     console.log(`${friend} мій найкращий друг, його номер ${friendIndex + 1}`)
// });

// Метод map перебирає масив, витягує по черзі елементи та щось з ними робить (наприклад змінює) та закидає їх у новостворений масив

// const fruits = ['Apples', 'Bananas', 'Pears', 'Grapes']

// const fruitLength = fruits.map((fruit) => {
//     return fruit.length
// })    

// console.log(fruitLength)

// Використовуючи 👆 масив об’єктів виконай наступні завдання
// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// Збільшити кількість годин гравця по id. Переписати на тернарник
// Отримати масив всіх гравців онлайн
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
// Знайти гравця по id
// Знайти гравця по імені
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];

//   const playersNames = players.map((player) => {
//     return player.name
// })

// console.log(playersNames)

// const playersMultipliedPoints = players.map((player) => {
//     return player.points + player.points / 100 * 10 
// })
// console.log(playersMultipliedPoints)


// const newTimePlayed = players.map((player) => {
//     return player.timePlayed + 11
// });

// console.log(newTimePlayed)

// const onlinePlayers = players.filter(player => player.online )
// console.log(onlinePlayers)

// const notOnlinePlayers = players.filter(player => !player.online )
// console.log(notOnlinePlayers)

// const hardcorePlayers = players.filter(player => player.timePlayed > 250)
// console.log(hardcorePlayers)

// const findPlayerById = players.find(player => player.id === 'player-1')
// console.log(findPlayerById)

// const findPlayerByname = (arr, name) => players.find(player => player.name === name)
// console.log(findPlayerByname(players, 'Chelsy'))

// const allTime = players.every(player => player.timePlayed > 200)
// console.log(allTime)

// const allOnline = players.every(player => player.online === true)
// console.log(allOnline)




