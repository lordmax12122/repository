// Для того щоб отримати у js на елемент з HTML (з Dom дерева)
// Використовуємо метод querySelector
// const boxElement = document.querySelector('.box')
// console.log(boxElement)
// boxElement.style.backgroundColor = 'red';
// const boxElements = document.querySelectorAll('div')
// console.log(boxElements)
// boxElements.forEach((divElement) => {
//     divElement.style.boxShadow = "2px 3px 15px 1px"
// });

// const title = boxElement.firstElementChild
// console.log(title)

// const lastBoxElement = boxElement.lastElementChild
// console.log(lastBoxElement)

// const nextBoxSibling = boxElement.nextElementSibling
// console.log(nextBoxSibling)

// console.log(boxElement.children)

// const imgElement = document.querySelector('img')
// console.log(imgElement)

// imgElement.src = "https://i.ytimg.com/vi/xjodBEJpA-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCl17-Mr3gtsX4uz6roDyOH9CAxOw"
// imgElement.alt = "monkey with a banana"

// const textAdd = document.querySelector("h2")
// console.log(textAdd)
// textAdd.textContent = "monke with a banana"
// const hasTextClass = textAdd.classList.contains("text")
// console.log(hasTextClass)

// textAdd.classList.add("text")
// console.log(textAdd.classList.contains("text"))

// textAdd.classList.remove("text")
// console.log(textAdd)

// const articleElement = document.createElement('article')
// console.log(articleElement)
// const titleArticle = document.createElement("h2")
// titleArticle.textContent = 'рецепт млинців'

// // articleElement.append(titleArticle)

// const descriptionReceipt = document.createElement('p')
// descriptionReceipt.textContent = 'тут має бути рецепт (мені лінь його шукати)'

// // articleElement.append(descriptionReceipt)

// const imagePancakesElement = document.createElement('img')

// imagePancakesElement.src = "https://honestcooking.com/wp-content/uploads/2013/05/IMG_2095.jpg"
// imagePancakesElement.alt = "monke pancake"

// // articleElement.append(imagePancakesElement)

// const linkPancakesElement = document.createElement('a')

// linkPancakesElement.href = "https://honestcooking.com/monkey-pancakes-recipe/"
// linkPancakesElement.textContent = "Monke Pancakes Receipt"

// articleElement.append(titleArticle, descriptionReceipt, imagePancakesElement, linkPancakesElement)

// const page = document.querySelector("body")

// page.append(articleElement)

// const box = document.querySelector('.box')
// // const button = document.createElement('button')
// // box.append(button)
// // box.prepend(button)
// // box.after(button)
// // box.before(button)
// // const desc = document.querySelector('.desc')
// // box.insertBefore(button, desc)
// // console.log(button)
// // console.log(box)
// // console.log(box.innerHTML)
// // box.innerHTML = `<img src="" alt="">`;
// // console.log(box.innerHTML)
// // button.textContent = "Button"
// console.log(box)
// const layout = `<ul class="list">
//         <li class="item-element">1</li>
//         <li class="item-element">2</li>
//         <li class="item-element">3</li>
//         <li class="item-element">4</li>
//         <li class="item-element">5</li>
//     </ul>`

// box.innerHTML = layout

// const fruits = [
//     {
//         title: "Jack",
//         price: 4000,
//         photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_9e2isgKNLgmnfgk20O4iSTTFYJQAmKAz7lvE93jRV7IrFbg6DiuaN_tbCPQAB7VnQtd6QW_OHog6LMQ10ApmQ"
//     },
//     {
//         title: "Bread",
//         price: 2500,
//         photo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Artocarpus_altilis_%28fruit%29.jpg"
//     },
//     {
//         title: "Durian",
//         price: 9000,
//         photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Durian_in_black.jpg/1200px-Durian_in_black.jpg"
//     },
//     {
//         title: "Pineapple",
//         price: 500,
//         photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzDBpJZcKMC2oKTLB2zhCgncM7kN8Qj_YCVMTEoAWF5dxVa-M7xUGGA_WiUda0QiCdTSezB_AMoMdDESHMhdO9Q"
//     },
//     {
//         title: "Dragonfruit",
//         price: 1000,
//         photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/640px-Pitaya_cross_section_ed2.jpg"
//     }
// ];


// const fruitElement = fruits.map((fruit) =>
// `<li class="list-item">
// <h2>${fruit.title}</h2>
// <p>${fruit.price}</p>
// <img src="${fruit.photo}" alt="${fruit.title}">
// </li>`
// ).join('')

// console.log(fruitElement)

// const fruitList = document.querySelector('.fruit-list')

// fruitList.innerHTML = fruitElement

// fruitList.insertAdjacentElement("beforeend", fruitElement)
// const fruitsList = document.querySelector("ul")

// fruits.forEach(fruit => {
//     const fruitItem = document.createElement("li")
//     const fruitText = document.createElement("h2")
//     const fruitDesc = document.createElement("p")
//     const fruitImage = document.createElement("img")
//     fruitItem.append(fruitText, fruitDesc, fruitImage)
//     fruitsList.append(fruitItem)
// })