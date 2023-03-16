const about = document.querySelector(".about")
const aboutContainer = document.querySelector(".about-container")
const work = document.querySelector(".work")
const workContainer = document.querySelector(".work-container")
const contact = document.querySelector(".contact")
const contactContainer = document.querySelector(".contact-container")
const life = document.querySelector(".life")
const lifeHeadline = document.querySelector('.life-headline')


if(window.matchMedia("(min-width: 640px)").matches) {

    setTimeout(() => {
        workContainer.style.opacity = 1
        workContainer.style.transform = 'translateY(0)'
    }, 6400) 


    const options = {
        root: null, //it is the viewport
        threshold: 0.5,
        rootMargin: '0px' // '-150px 0px 200px 0px' it needs to have px or % 
    }
    
     
    const aboutObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry)
            if(!entry.isIntersecting) {
                return
            }
            aboutContainer.style.opacity = 1
            aboutContainer.style.transform = 'translateY(0)'
        })
    }, options)
    
    aboutObserver.observe(about)

    const lifeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry)
            if(!entry.isIntersecting) {
                return
            }
            lifeHeadline.style.opacity = 1
            
        })
    }, options)
    
    lifeObserver.observe(life)
    
    
    const contactObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry)
            if(!entry.isIntersecting) {
                return
            }
            contactContainer.style.opacity = 1
            contactContainer.style.transform = 'translateY(0)'
        })
    }, options)
    
    contactObserver.observe(contact)
              
} else {

    setTimeout(() => {
        workContainer.style.opacity = 1
        workContainer.style.transform = 'translateY(0)'
    }, 6400) 
    
    const options = {
        root: null, //it is the viewport
        threshold: .7,
        rootMargin: '0px' // '-150px 0px 200px 0px' it needs to have px or % 
    }
    
    
   
    const lifeOptions = {
        root: null, //it is the viewport
        threshold: 1,
        rootMargin: '0px 0px 0px 0px' // '-150px 0px 200px 0px' it needs to have px or % 
    }
 
 
 

    const aboutObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry)
            if(!entry.isIntersecting) {
                return
            }
            aboutContainer.style.opacity = 1
            aboutContainer.style.transform = 'translateY(0)'
        })
    }, options)
    
    aboutObserver.observe(about)

       
    const lifeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry)
            if(!entry.isIntersecting) {
                return
            }
            lifeHeadline.style.opacity = 1
            
        })
    }, lifeOptions)
    
    lifeObserver.observe(life)
    
    const contactObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry)
            if(!entry.isIntersecting) {
                return
            }
            contactContainer.style.opacity = 1
            contactContainer.style.transform = 'translateY(0)'
        })
    }, options)
    
    contactObserver.observe(contact)
    
}




