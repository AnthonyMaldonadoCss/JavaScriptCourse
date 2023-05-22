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