// 'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/**
 * Implementing Smooth Scrolling
 */

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//Button Scrolling
btnScrollTo.addEventListener('click', function(e){
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords)

  // console.log(e.target.getBoundingClientRect())

  // console.log(`Current Scroll (X/Y)`, window.pageXOffset, pageYOffset)

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  // window.scrollTo({
    // left: s1coords.left + window.pageXOffset,
    // top: s1coords.top + window.pageYOffset,
    // behavior: 'smooth'
  // });

  section1.scrollIntoView({
    behavior: 'smooth'
  })
})

///////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id)

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     })

//   })
// })


//1. Add event listener to comment parent element
//2. Determine what element originated the event
//3.

document
  .querySelector('.nav__links')
  .addEventListener('click', function(e){
  e.preventDefault();

  //Matchin strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
})

//Tabbet component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const tabsContainer = document.querySelector('.operations__tab-container');
const nav = document.querySelector('.nav');
tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  
  //Guard clause
  if(!clicked){return}

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  
  clicked.classList.add('operations__tab--active')

  //Activated content area
  (document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'))
})

//Menu fade animation

const handleOver = function (e) {

  const opacity = this.opacity;

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link){
        el.style.opacity = opacity
      }
    })
    logo.style.opacity = opacity;
  }

}

nav.addEventListener('mouseover', handleOver.bind({'opacity': 0.5}))

nav.addEventListener('mouseout', handleOver.bind({'opacity': 1}))

//Sticky navigation

// const initialCoords = section1.getBoundingClientRect();

// console.log({initialCoords});

// window.addEventListener('scroll', function (){
//   // console.log(window.scrollY)

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky')
//   }
//   else {
//     nav.classList.remove('sticky')
//   }

// })

//Sticky navigation: Intersection observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const headerNav =  document.querySelector('.header');
const navHeight =  nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
  const [ entry ] = entries;

  const { isIntersecting } = entry;

  if (!isIntersecting) {
    nav.classList.add('sticky');
  }
  else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`});
headerObserver.observe(headerNav);

//Reveal sections

const allSection = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
  const [ entry ] = entries;
  const { isIntersecting } = entry;
  if (!isIntersecting) return
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection,{root: null, threshold: 0.15});

allSection.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})


//lazy loading images

/**
 * la idea en general es colocar una imagen de poco peso como predeterminada
 * con el observer identificar cuando esta visible y en ese momento mostrar la verdadera imagen 
 * en pantalla
 */

const loadImg = function (entries, observer) {
  const [ entry ] = entries;
  const { isIntersecting } = entry;
  // console.log(entry); 
  if (!isIntersecting) return;

  //replace src with data-source
  entry.target.src = entry.target.dataset.src;

  //una vez que la imagen este cargada es cuando se elimina el blur
  //de lo contrario como la imagen aun no carga se vera borrosa
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);

}


const imgTarget = document.querySelectorAll('img[data-src]');
// console.log({imgTarget});
const imgObserver = new IntersectionObserver(loadImg, {root: null, threshold: 0, rootMargin: '200px'});

for (let img of imgTarget) {
  imgObserver.observe(img);
}


//Slider

const sliders = function() {

  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const dotContainer = document.getElementById('dotis');

  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let currSlide = 0;
  const maxSlide = (slides.length - 1);

  const createDots = function() {
    slides.forEach((_, i)=> {
      dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot, i)=> {
        dot.classList.remove('dots__dot--active');
      })

      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }

  const goToSlide = function(currSlide) {

    for( let [i, slide] of slides.entries()) {
      let translate = 100 * (i - currSlide);
      slide.style.transform = `translateX(${translate}%)`
    }

  }
  const nextSlide = function () {

    if (currSlide === maxSlide) { 
      currSlide = 0;
    }
    else {
      currSlide ++
    }

    goToSlide(currSlide);
    activateDot(currSlide)
  }

  const prevSlide = function() {

    if (currSlide === 0) { 
      currSlide = maxSlide;
    }
    else {
      currSlide --
    }

    goToSlide(currSlide)
    activateDot(currSlide)
  }


  const init = function() {
    goToSlide(0);
    createDots();
    activateDot(0);
  }

  init()

  //Event Handlers
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function(e){
    console.log(e);

    if (e.key == 'ArrowLeft') prevSlide();
    if (e.key == 'ArrowRight') nextSlide();
  })

  dotContainer.addEventListener('click',function(e){
    if ( e.target.classList.contains('dots__dot') ) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  })
}

sliders();

///////////////




/**
 * Types of selectors
 */

//Select all Dom
console.log(document.documentElement)

//Select Head of DOM
console.log(document.head)

//select Body of DOM
console.log(document.body)

//select only section with className
//this selector return the first coincidence
const header = document.querySelector('.header')

//select node list of the DOM
//return the list node
//that can be traversed
const allSections = document.querySelectorAll('.section')

//select the one element
//no need to include the id selector
document.getElementById('section--1')

//select all tags
//this is reactive,
  //if before the selection there were 5 items
  //and an item is removed from the DOM
  //then we will have 4
const allButtons = document.getElementsByTagName('button');


/**
 * Creating and inserting elements
 */

//.insertAdjacentHTML

//CreateElement

const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML  =
  `We used cokied for improved functionality and
  analitycs.
  <button class="btn btn--close-cookie">
    Got it!
  </button>`;

header.append(cookieMessage)
// header.prepend(cookieMessage)
// header.insertAdjacentElement("beforebegin", cookieMessage)

/**
 * Delete elements
 */

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function(e){
    e.preventDefault();
    cookieMessage.remove();
  }
)

/**
 * Styles, Attributes and Clases
 */

//these styles are written in line of the tag
cookieMessage.style.backgroundColor = '#37383d';
cookieMessage.style.width = '120%';

// console.log(cookieMessage.style.color)
// console.log(cookieMessage.style.backgroundColor)


//gets the style defined in the style sheet
// console.log(getComputedStyle(cookieMessage))
// console.log(getComputedStyle(cookieMessage).color);
// console.log(getComputedStyle(cookieMessage).height);

cookieMessage.style.height = Number.parseInt(
  getComputedStyle(cookieMessage).height, 10
) + 30 + 'px'

// console.log(cookieMessage.style.height);

document.documentElement.style.setProperty
('--color-primary', 'orangered')


//Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo.src)
// console.log(logo.alt)
// console.log(logo.className)

logo.alt = 'Beautifull minimalist logo'

// console.log(logo.alt)
//Non - standar
// console.log(logo.designer)
// console.log(logo.getAttribute('designer'))
logo.setAttribute('company','Bankist')


// console.log(logo.src) //absolute route
// console.log(logo.getAttribute('src'))//relative route


const link = document.querySelector('.nav__link--btn');

// console.log(link.href)
// console.log(link.getAttribute('href'))

//Data attributes
//camelCase
// console.log(logo.dataset.versionNumber)

// Classes

logo.classList.add('c', 'k')
logo.classList.remove('c', 'k')
logo.classList.toggle('c', 'k')
logo.classList.contains('c', 'k')

//Dont'use
//this remove the all class names
logo.className = 'Anthony'

/**
 * Types of Events and Events Handlers
 */

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e){
//   confirm('AddEventListener: Great! You are reading the heading :D')
// })

const h1Fuction = function(e){
  confirm('AddEventListener: Great! You are reading the heading :D')
}

h1.addEventListener('mouseenter', h1Fuction)

setTimeout(() =>
  h1.removeEventListener('mouseenter', h1Fuction)
, 3000);

/**
 * Event propagation: Bubbling and Capturing
 */

/**
 *  Cuando generamos una acción en un elemento del DOM
 *    # Este evento pasa a la fase de Captura, y en realidad este evento
 *    # se está generando en la raiz del documento y va a ir iterando sobre los elementos padres
 *    # hasta llegar a el elemento que tiene el addEventListener, a esta segunda etapa se le conoce como
 *    # Target Phase
 *    # y por último cuando ese evento realiza una accion, como por ejemplo un alert
 *    # este evento irá escalando por los elementos padre de nuevo al document para ejecutarse,
 *    # a esta fase se le conoce como Bubbling phase
 *
 *    # Lo importante de esto es que si escuchamos el evento en algun elemento padre del evento hijo que genero
 *    # la accion, es posoble que capturemos el evento
 *
 *    #para evitar este tipo de comportamiento, ocupamos el e.stopPropagation()
 *
 */


/**
 * Event propagation in practice
*/

const randomInt = (min,max) =>
  Math.floor(Math.random() * (max - min) + min);

const randomColor = () =>
`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;



//elemento Padre
document
  .querySelector('.nav')
  .addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()
})

//Elemento Padre
document
  .querySelector('.nav__links')
  .addEventListener('click', function(e){
  this.style.backgroundColor =  randomColor()
})

//elemento hijo
document
  .querySelector('.nav__link')
  .addEventListener('click', function(e){
  // e.stopPropagation();
  this.style.backgroundColor =  randomColor()
})

/**
 * DOM Traversing
*/

const h1_2 = document.querySelector('h1');

//Going downwards: child

console.log(h1_2.querySelectorAll('.highlight'))
console.log(h1_2.childNodes)
console.log(h1_2.children)
h1_2.firstElementChild.style.color = 'white'
h1_2.lastElementChild.style.color = 'orangered'

//Going upwards: parents

console.log(h1_2.parentNode)
console.log(h1_2.parentElement)
console.log(h1_2.lastElementChild.parentNode)

h1_2.closest('header').style.background = 'var(--gradient-secondary)'

h1_2.closest('h1').style.background = 'var(--gradient-primary)'


//Going sideways: siblings

console.log(h1_2.previousElementSibling)
console.log(h1_2.nextElementSibling)
console.log(h1_2.previousSibling)
console.log(h1_2.nextSibling)

console.log([...h1_2.parentElement.children])
console.log(h1_2.parentElement.children)

const el = [...h1_2.parentElement.children]

el.forEach(function(el){
  if(el !== h1) el.style.transform =  'scale(0.5)'
})
const div = document.querySelector('div')

// console.log(div.previousElementSibling)
// console.log(div.nextElementSibling)

/**
 * Building a tabbet component
 */