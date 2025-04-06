
console.log(_.drop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))

console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))


function Foo () {
    this.name = "Mark"
}

const object = {
    name: "Max",
}

const object2 = {
    name: "Razik",
}

const as = _.assign(object, new Foo)
console.log(as)

// const boxMouseOver = document.querySelector(".hello-site");

// let mouseCheck = 0;

// boxMouseOver.addEventListener("mousemove",  _.debounce((event) => {
//     mouseCheck += 1
//     console.log(mouseCheck)
// }, 100)

// )

// Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою,
//  змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того,
//  щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс,
//  і передайте функцію, яка буде виконуватися при русі миші.
// <div id="graph" style="background-color: aliceblue;">
//       <svg width="500" height="300"></svg>

const block = document.querySelector(".block");

block.addEventListener("mousemove",  _.throttle((event) => {
    console.log(event)
    block.style.right = event.clientX + "px"
    block.style.top = event.clientY + "px"
}, 50)
)


