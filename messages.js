//Setup Variables
const setHeight1 = 135; //height of the boxes
const numBoxes1 = document.querySelectorAll('.box1').length; //quantity of boxes


gsap.set(".box1", {
  y: (i) => i * setHeight1
});



// Gsap Time //
const totalHeight1= numBoxes1*setHeight1;
const wrapOffsetTop1 = setHeight1/-2;
const wrapOffsetBottom1 = totalHeight1+wrapOffsetTop1;
var wrap1 = gsap.utils.wrap(wrapOffsetTop1,wrapOffsetBottom1);
const yheight1 = "+=" + totalHeight1*-1;



tl = gsap.timeline();
tl.to(".box1", {
  duration: 160,
  ease: "none",
  y: yheight1, //move each box the total height of all boxes to upwards
  modifiers: {
    y: gsap.utils.unitize(wrap1) //force y value to wrap when it reaches -100
  },
  repeat: -1
});

///Setup Variables
const setHeight2 = 80; //height of the boxes
const numBoxes2 = document.querySelectorAll('.box2').length; //quantity of boxes


gsap.set(".box2", {
  y: (i) => i * setHeight2
});



// Gsap Time //
const totalHeight2= numBoxes2*setHeight2;
const wrapOffsetTop2 = setHeight2/-2;
const wrapOffsetBottom2 = totalHeight2+wrapOffsetTop2;
var wrap2 = gsap.utils.wrap(wrapOffsetTop2,wrapOffsetBottom2);
const yheight2 = "+=" + totalHeight2*-1;



tl = gsap.timeline();
tl.to(".box2", {
  duration: 135,
  ease: "none",
  y: yheight2, //move each box the total height of all boxes to upwards
  modifiers: {
    y: gsap.utils.unitize(wrap2) //force y value to wrap when it reaches -100
  },
  repeat: -1
});

//Setup Variables
const setHeight3 = 120; //height of the boxes
const numBoxes3 = document.querySelectorAll('.box3').length; //quantity of boxes


gsap.set(".box3", {
  y: (i) => i * setHeight3
});



// Gsap Time //
const totalHeight3= numBoxes3*setHeight3;
const wrapOffsetTop3 = setHeight3/-2;
const wrapOffsetBottom3 = totalHeight3+wrapOffsetTop3;
var wrap3 = gsap.utils.wrap(wrapOffsetTop3,wrapOffsetBottom3);
const yheight3 = "+=" + totalHeight3*-1;



tl = gsap.timeline();
tl.to(".box3", {
  duration: 140,
  ease: "none",
  y: yheight3, //move each box the total height of all boxes to upwards
  modifiers: {
    y: gsap.utils.unitize(wrap3) //force y value to wrap when it reaches -100
  },
  repeat: -1
});