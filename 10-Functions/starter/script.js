'use strict';

/*const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 'FIELD EMPTY',
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);

  bookings.push(booking);

  //console.log(bookings)
};


createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);*/

/**
 * How passing arguments works: Value Vs reference
 */

/*const flight = 'LH234'
const Anthony = {
  name: 'Anthony',
  passport: '1233543215345'
}

const checkInflight = function(flightNum, passengers){
 flightNum = 'LH2999'
 passengers.name = `Mr. ${passengers.name}`

 if (passengers.passport === '1233543215345') {
   console.log('Check IN')
 } else {
  console.log('Wrong passport')
 }
}

checkInflight(flight, Anthony);

console.log(flight);
console.log(Anthony)

const newPassport = function(person){
  person.passport = Math.trunc( Math.random() * 1000000)
}

newPassport(Anthony)
checkInflight(flight, Anthony);*/

/**
 * Firs Class and Higher-Orders Functions
 */


/**
 * functions accepting callback functions
 */

/*const oneWord = function (str){
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

//Higher-Orders Function
const transformer = function (str, fn){
  console.log(`Original string: ${str}`);

  console.log(`Transformed  string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord)


const high5 = function (){
  console.log('hi!')
}

//callback function
document.body.addEventListener('click', high5)


const personas = ['anthony', 'heczaid', 'Luis Manuel', 'Eduardo Jose']

personas.forEach(high5)*/

/**
 * functions returting functions
 */

/*const greet = function (greeting){
  return function (name){
    console.log(`${greeting} ${name}`)
  }
}

const greetHey = greet('hey')
greetHey('Anthony')
greetHey('Rogers')

greet('Hello')('Anthony')

const greetNew = greeting => name => console.log(`${greeting} ${name}`)
const greetHi = greetNew('hey')
greetHi('Anthony')
greetHi('Rogers')

greetNew('Hello')('Anthony')*/

/**
 * /the call and apply methods
 */
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
      console.log(`${name} booked a seat on ${this.airline} fligth ${this.iataCode}${flightNum}`);

      this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

lufthansa.book('239', 'Anthony')
lufthansa.book('250', 'Eduardo')
console.log(lufthansa)

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

const book = lufthansa.book;
//book(23, 'Sarah Williams')

book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings)

//apply method

const fligthData = [583, 'George Cooper']
book.apply(eurowings, fligthData)
console.log(eurowings)

book.call(eurowings, ...fligthData)
console.log(eurowings)
*/

/**
 * the bind method
 */
/*
const bookEW =  book.bind(eurowings)
const bookLH =  book.bind(lufthansa)
bookEW(23 , 'Steve Williams')
bookEW(72 , 'Anthony Maldonado')


const bookEW23 = book.bind(eurowings, 23);

bookEW23('Heczaid Santana')
bookEW23('Martha Cooper')

//With Event listeners

lufthansa.planes = 300;

lufthansa.buyPlane = function (){
  //console.log(this)
  this.planes++
  console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100))
console.log(addVAT(23))

const addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100))
console.log(addVAT2(23))*/

/**
 * Immediatly invoked functions expressions
 */
/*

//is important when using this type of functions to use the semicolon
const runOnce = function(){
  console.log(`This will never run again`);
};

runOnce();

 (function () {
   console.log(`This will never run again`);
   const isPrivate = 25;
 })();

 //console.log(isPrivate)

(() => console.log(`This will never run again`))();

//define variables privates

{
  const isPrivate = 25;
  var notPrivate = 76;
}
console.log(notPrivate)*/

/**
 * Clousures
 */

/*
const secureBooking = function(){
  let passengerCount = 0;

  return function (){
    passengerCount++
    console.log(`${passengerCount} passengers`)
  }
}

const booker = secureBooking();

booker()
booker()
booker()
booker()
booker()


console.dir(booker)


const quarter = function(){
  let quarterMount = 3;
  let counter = 0;

  return function(days){
    counter++
    console.log(`${days / quarterMount} it is the quarter ${counter}`)
  }
}

const quarterCall = quarter()

quarterCall(24);
quarterCall(12);
quarterCall(48);
quarterCall(54);
*/

/**
 * More clousures examples
 */

// Example 1

let f;
const g = function (){
  const a = 23;
  f = function(){
    console.log(a * 2)
  }
}

const h = function(){
  const b = 777;
  f = function(){
    console.log(b * 2)
  }
}

g();
f();

// Re assigning f function
h();
f();

// Example 2

const boardPassgers =  function(n, wait){
  
  //have priority
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are no boarding all ${n} passengers`);
    
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  

  console.log(`Will start boarding in ${wait} seconds`)
};

const perGroup = 1000;

boardPassgers(180, 3)