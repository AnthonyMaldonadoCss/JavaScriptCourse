'use strict';

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
 * Event delegation
*/

