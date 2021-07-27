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

var me = 'Anthony';
let job = 'developer';
const year = 1995;

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

const Anthony = {
  year: 1995,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
