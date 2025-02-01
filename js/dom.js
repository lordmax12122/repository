// Для того щоб отримати у js на елемент з HTML (з Dom дерева)
// Використовуємо метод querySelector
const boxElement = document.querySelector('.box')
console.log(boxElement)
boxElement.style.backgroundColor = 'red';
const boxElements = document.querySelectorAll('div')
console.log(boxElements)
boxElements.forEach((divElement) => {
    divElement.style.boxShadow = "2px 3px 15px 1px"
});

const title = boxElement.firstElementChild
console.log(title)

const lastBoxElement = boxElement.lastElementChild
console.log(lastBoxElement)

const nextBoxSibling = boxElement.nextElementSibling
console.log(nextBoxSibling)

console.log(boxElement.children)

const imgElement = document.querySelector('img')
console.log(imgElement)

imgElement.src = "https://i.ytimg.com/vi/xjodBEJpA-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCl17-Mr3gtsX4uz6roDyOH9CAxOw"
imgElement.alt = "monkey with a banana"

const textAdd = document.querySelector("h2")
console.log(textAdd)
textAdd.textContent = "monke with a banana"
const hasTextClass = textAdd.classList.contains("text")
console.log(hasTextClass)

textAdd.classList.add("text")
console.log(textAdd.classList.contains("text"))

textAdd.classList.remove("text")
console.log(textAdd)

const articleElement = document.createElement('article')
console.log(articleElement)
const titleArticle = document.createElement("h2")
titleArticle.textContent = 'рецепт млинців'

// articleElement.append(titleArticle)

const descriptionReceipt = document.createElement('p')
descriptionReceipt.textContent = 'тут має бути рецепт (мені лінь його шукати)'

// articleElement.append(descriptionReceipt)

const imagePancakesElement = document.createElement('img')

imagePancakesElement.src = "https://honestcooking.com/wp-content/uploads/2013/05/IMG_2095.jpg"
imagePancakesElement.alt = "monke pancake"

// articleElement.append(imagePancakesElement)

const linkPancakesElement = document.createElement('a')

linkPancakesElement.href = "https://honestcooking.com/monkey-pancakes-recipe/"
linkPancakesElement.textContent = "Monke Pancakes Receipt"

articleElement.append(titleArticle, descriptionReceipt, imagePancakesElement, linkPancakesElement)

const page = document.querySelector("body")

page.append(articleElement)