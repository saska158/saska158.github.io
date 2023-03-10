const cursor1 = document.querySelector('.cursor1')
const cursor2 = document.querySelector('.cursor2')
const buttons = document.querySelectorAll('button')
const gif = document.querySelector('img')
const wrappers = document.querySelectorAll('.wrapper')
const links = document.querySelectorAll('a')
const mail = document.querySelector('.mail')




document.addEventListener('mousemove', event => {
    cursor1.style.cssText = cursor2.style.cssText = `left: ${event.clientX}px; 
      top: ${event.clientY}px`;  
    })

 

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor1.classList.add('cursor1change1')
        cursor2.classList.add('cursor2change1')
    })
    button.addEventListener('mouseout', () => {
        cursor1.classList.remove('cursor1change1')
        cursor2.classList.remove('cursor2change1')
    })
})

 

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor1.classList.add('cursor1change1')
        cursor2.classList.add('cursor2change1')
    })
    link.addEventListener('mouseout', () => {
        cursor1.classList.remove('cursor1change1')
        cursor2.classList.remove('cursor2change1')
    })
})

mail.addEventListener('mouseenter', () => {
    cursor1.classList.add('cursor1change1')
    cursor2.classList.add('cursor2change1')
})
mail.addEventListener('mouseout', () => {
    cursor1.classList.remove('cursor1change1')
    cursor2.classList.remove('cursor2change1')
})


gif.addEventListener('mouseenter', () => {
    cursor1.classList.add('cursor1change2')
    cursor2.classList.add('cursor2change2')
    cursor2.textContent = 'chill'
    
})

gif.addEventListener('mouseout', () => {
    cursor1.classList.remove('cursor1change2')
    cursor2.classList.remove('cursor2change2')
    cursor2.textContent = ''
})

wrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseover', () => {
        cursor1.classList.add('cursor1change4')
        cursor2.classList.add('cursor2change4')
        cursor2.textContent = 'breathe!'
        
    })
})
wrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseout', () => {
        cursor1.classList.remove('cursor1change4')
        cursor2.classList.remove('cursor2change4')
        cursor2.textContent = ''
    })
})

lifeHeadline.addEventListener('mouseover', () => {
    cursor1.classList.add('cursor1change4')
    cursor2.classList.add('cursor2change4')
    cursor2.textContent = 'breathe!'
})

