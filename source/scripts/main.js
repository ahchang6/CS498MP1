//Navbar Resize start
let startY = window.scrollY;

function navbarResize(){
  if (window.scrollY < startY + 20){
    document.getElementById('sticky').style.fontSize = "17px";  
  }
  else if (window.scrollY != startY){
    document.getElementById('sticky').style.fontSize = "15px";
  }
};

document.getElementById('scroller').onscroll = function() {
navbarResize();  
};
//Navbar Resize end

//Positional Highlighting start
function getY(elm){
  id = document.getElementById(elm);
  // bounding Client is top of element to top of view point, positive
  // means top of screen hasn't hit object
  let object = id.getBoundingClientRect();
  return object.top;
}/*
let posSOne = getY('section1');
let posSTwo = getY('section2');
let posSThr = getY('section3');
*/
window.addEventListener("scroll", function(event) {
  let posSOne = getY('section1');
  let posSTwo = getY('section2');
  let posSThr = getY('section3');
      if(posSOne < 1){
        document.getElementById('about').style.backgroundColor = 'gray';
      }
      if(posSOne > 1 || posSTwo < 1){
        document.getElementById('about').style.backgroundColor = 'transparent';
      }
      if(posSTwo < 1){
        document.getElementById('works').style.backgroundColor = 'gray';
      }
      if(posSTwo > 1 || posSThr < 1){
        document.getElementById('works').style.backgroundColor = 'transparent';
      }
      if(posSThr < 1){
        document.getElementById('contact').style.backgroundColor = 'gray';
      }
      if(posSThr > 1){
        document.getElementById('contact').style.backgroundColor = 'transparent';
      }
}, false);
//Positional Highlighting end

//Smooth Scroll start
// taken snippet from :
// https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
function addSmoothScroll(elmnt, target){
button = document.getElementById(elmnt);
button.addEventListener('click', function (event) {
  elmnt = document.getElementById(target);
  scrollTo(document.body, elmnt.offsetTop, 600);
  // so it doesn't go jump to the element
  event.preventDefault();
}, false);
}
addSmoothScroll('about','section1');
addSmoothScroll('works','section2');
addSmoothScroll('contact','section3');
//Smooth Scroll end

//Carousel start
//carousel snippet, idea from:
//https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

function nextSlide(direction) {
  // 1 forward, -1 for backward
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+direction)%slides.length;
    if( currentSlide < 0){
      currentSlide = slides.length -1;
    }
    slides[currentSlide].className = 'slide showing';
}
//Carousel start

document.getElementById('leftButton').onclick = function(){
  nextSlide((-1));
};
document.getElementById('rightButton').onclick = function(){
  nextSlide(1);
};
//Carousel end
//Modal start
let modalButtonOne = document.getElementById('startModal');
let modalButtonTwo = document.getElementById('startModalTwo');
let modal = document.getElementById('corn');
let modalTwo = document.getElementById('moreCorn');
modalButtonOne.onclick = function(){
 modal.style.display ='block';
};
modalButtonTwo.onclick = function(){
 modalTwo.style.display ='block';
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalTwo) {
        modalTwo.style.display = "none";
    }
};
//Modal end
