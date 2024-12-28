// const user = {

//     userName: "Maksym",

//     age: 14,

//     isStudent: false,

//     friends: ["Max", "Markiyan", "Sasha"],

//     adress: {
//         country: "Ukraine",
//         city: "Lviv"
//     }
// }

// console.log(user.adress)
// console.log(user.friends)
// console.log(user.adress.city)
// console.log(user.friends[1])

// const userFriends = user.friends
// for(let i = 0; i < userFriends.length; i++ ) {
//     console.log(userFriends[i])
// }

// методи об'єкту це функції, які вкладені у обєкт та опрацьовують дані цього обєкту
// const user = {

//     userName: "Maksym",

//     age: 14,

//     isStudent: false,

//     friends: ["Max ", "Markiyan ", "Sasha "],

//     adress: {
//         country: "Ukraine",
//         city: "Lviv"
//     },
//     showFriends() {
//         let message = "Мої друзі "
//         for (let i = 0; i < user.friends.length; i++) {
//             console.log(user.friends[i]);
//             message += user.friends[i]
            
//         }
//         return message
//     }
// }

// console.log(user.showFriends())
const login = prompt("Введіть логін")
const password = prompt("Введіть логін")
const student = {
    login: login,
    password: password
}
console.log(student)
