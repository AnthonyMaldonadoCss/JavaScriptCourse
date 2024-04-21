'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const jen = new Person('Jen', 1990);
console.log(jen);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}


const mike = new Person('Mike', 1983);
const jill = new Person('Jill', 2000);
console.log(mike instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  this.age = 2037 - this.birthYear;
  return this.age;
}
console.log(jen.calcAge());
console.log(jill.calcAge());

console.log( Person.prototype );
console.log( Person.prototype.isPrototypeOf(jen) );
console.log( jen.hasOwnProperty('firstName') );
console.log( jen.__proto__ === Person.prototype );

const arra = [3, 6, 9, 12, 12, 5, 5, 89];
console.log( arra.__proto__ );
console.log( arra.__proto__.__proto__ );
Array.prototype.unique = function () {
  return [...new Set(this)];
}
console.log("unique method");
console.log(arra.unique());

//First coding challenge
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
    - The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(speed, brandCar) {
  this.speed = speed;
  this.brandCar = brandCar;
}

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.brandCar} - accelerate - ${this.speed}km/h`);
}

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.brandCar} - brake - ${this.speed}km/h`);
}

const bmw = new Car(120, 'BMW');
const mercedes = new Car(95, 'Mercedes');

bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
