const buttonBg = document.querySelector("button")

buttonBg.addEventListener('click',(event) => {
    const page = document.querySelector('body')

    const red = Math.random() * (255 - 0) + 0
    const green = Math.random() * (255 - 0) + 0
    const blue = Math.random() * (255 - 0) + 0
    page.style.backgroundColor = `rgba(${red},${green},${blue})`;
    console.log(event.target)
});

const inputElement = document.querySelector(".input")
inputElement.addEventListener('input', (event) => {
    console.log(event.target.value)
})

const inputTest = document.querySelector('.form-input')
inputTest.addEventListener('change', (event) => {
    console.log(event.target.value)
})