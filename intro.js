const intro = document.getElementById("intro")
const introText = document.getElementById("intro-text")
const main = document.querySelector('main')

setTimeout(() => {
    introText.innerText = 'searching'
}, 1000)

setTimeout(() => {
    introText.innerText = 'waiting'
}, 2000)

setTimeout(() => {
    introText.innerText = 'loading'
}, 3000)


setTimeout(() => {
    introText.innerText = 'freaking out!'
    introText.style.fontSize = '5rem'
}, 4000)
setTimeout(() => {
    intro.style.background = 'rgba(0,0,0,0.5)'
}, 6000)


setTimeout(() => {
    intro.style.transform = 'translateY(1000px)'
    main.style.transform = 'translateY(0)'
}, 6150)

