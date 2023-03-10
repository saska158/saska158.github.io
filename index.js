const sectionsContainer = document.querySelector('.sections-container')
const sections = document.getElementsByClassName('section')
const sectionsArray = Array.from(sections)
const aboutMeBtn = document.getElementById("about-me-btn")
const aboutJoke = document.querySelector('.about-joke')

//horizontal scrolling

sectionsContainer.addEventListener('wheel', e => {
    if(window.matchMedia("(min-width: 640px)").matches) {
        e.preventDefault();
        sectionsContainer.scrollLeft += e.deltaY;
    }
     
 })

 //dragging

let isDown = false;
let startX;
let scrollLeft;

sectionsContainer.addEventListener('mousedown', (e) => {
  isDown = true;

  startX = e.pageX -sectionsContainer.offsetLeft;
  scrollLeft = sectionsContainer.scrollLeft;
});

sectionsContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

sectionsContainer.addEventListener('mouseup', () => {
  isDown = false;
});

sectionsContainer.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - sectionsContainer.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  sectionsContainer.scrollLeft = scrollLeft - walk;
});

//about me

aboutMeBtn.addEventListener("click", () => {
  aboutJoke.style.opacity = "1"
  setTimeout(() => {
      aboutJoke.style.opacity = "0"
  }, 3000)
})






