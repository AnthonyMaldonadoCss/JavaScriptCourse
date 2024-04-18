'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }
}

const jen = new Person('Jen', 1990);
console.log(jen);

const mike = new Person('Mike', 1983);
const jill = new Person('Jill', 2000);
console.log(mike instanceof Person);