'use strict';

// function calcAge(birthyear) {
//   const age = 2021 - birthyear;

//   function printAnge() {
//     let output = ` ${firstName} You are ${age}, born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1991 && birthyear <= 1996) {
//       var millenial = true;

//       const firstName = `Heczaid`;
//       const str = `oh, and you're a milleniall, ${firstName}`;
//       console.log(str);

//       //Reassing outer scope's variable
//       output = `New String`;

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(millenial);
//     console.log(output);

//     //not running whit use strict mode
//     // console.log(add(2, 3));
//   }

//   printAnge();
//   return age;
// }

// const firstName = 'Anthony';

// calcAge(1995);

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Anthony';
// let job = 'developer';
// const year = 1995;

// Functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
// return a + b;
// }

// //temporal deadth zone

// const addExpr = function (a, b) {
// return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(numProducts);

// if (!numProducts) {
// deleteShoppingCar();
// }

// var numProducts = 10;

// function deleteShoppingCar() {
// console.log(`All products deleted`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// This Keyword in practice

// console.log(this);

// const calcAge = function (birthYear) {
//    console.log(2037 - birthYear);
//    console.log(this);
// };

// calcAge(1995);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1997);

// const Anthony = {
// year: 1995,
// calAge: function () {
// console.log(this);
// console.log(2037 - this.year);
// },
// };
// Anthony.calAge();

// |const matilda = {
// year: 1997,
// };

// matilda.calAge = Anthony.calAge;
// matilda.calAge();

// var firstName = 'Matilda';

// const Anthony = {
//   firstName: 'Anthony',
//   year: 1995,
//   calAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//Solution 1
// const self = this; // self o that
// const isMillenial = function () {
// console.log(self);
// console.log(self.year >= 1995 && self.year <= 1999);
// // console.log(this.year >= 1995 && this.year <= 1999);
// };

//Solution 2
// const isMillenial = () => {
//   console.log(this);
//   console.log(this.year >= 1995 && this.year <= 1999);
//   // console.log(this.year >= 1995 && this.year <= 1999);
// };
//la funcion de flecha no tiene su propio this
//por lo que usa el this de objeto global
// a diferencia de las funciones regulares

// isMillenial();
//},

// greet: () => {
// console.log(this);
// console.log(`hey ${this.firstName}`);
// },
//};

// Anthony.greet();
// Anthony.calAge();

// arguments keyword

// const addExpre = function (a, b) {
// console.log(arguments);
// return a + b;
// };
// addExpre(2, 5);
// addExpre(2, 5, 6, 8, 3);

// var addArrow = (a, b) => {
// console.log(arguments);
// return a + b;
// };

// addArrow(2, 5, 3, 4, 7);

//Primitives

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Anthony',
//   age: 26,
// };

// const friend = me;
// friend.age = 35;

// console.log(me);
// console.log(friend);

// Primitives types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
// console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriege`, jessica);
console.log(`After marriege`, marriedJessica);

//En este caso no estamos cambiando el valor original de la variable
//si no al espacio de memoria a la cual la variable hace referencia (heap)
//es decir que ambas variables estan apuntando al mismo espacio de memoria
// y cuando reasignamos cambiamos es ese valor
//para ambas variables

//copying objects

const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Heczaid', 'Antonio', 'Victoria'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(`Before marriege`, jessica2);
console.log(`After marriege`, jessicaCopy);
