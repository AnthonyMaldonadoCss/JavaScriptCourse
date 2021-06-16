// Video1: Activating strict mode
'use strict';

// let hasDriverLicence = false;
// const passTest = true;

// passTest === true ? hasDriverLicence = true : console.log(`nothing`)
// hasDriverLicence === true ? console.log(`I can drive :D`) : console.log(`nothing`);
/**
 * if we do not use strict mode we can miss the error of misspelling a variable
 *this is just an example, there are more things
 */

// Video2: Functions

// function logger() {
//     console.log('My name is Anthony');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// console.log(fruitProcessor(5, 3))

// const applejuice = fruitProcessor(25, 5);
// console.log(applejuice);

//Extra

// console.log(typeof (0));

// function fruitJuice(x, y) {
//     if (x === 0) {
//         alert(`you have to enter a valid number ${x}`)
//     } else if (y === 0) {
//         alert(`you have to enter a valid number ${y}`)
//     } else {
//         const juiceCall = (`the juice is made up of: ${x} apples y ${y} bananas`)
//         return juiceCall
//     }
// }

// let x = prompt('enter the number of apples you want in its juice');
// const clientJuice = fruitJuice(x, 25);
// console.log(clientJuice);

/**
 * Video 3
 * Fuctions declaratios Vs. Expressions
 */

// fuctions declaratios

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1995);

// console.log(age1);


//Functions de expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1995);

// console.log(age1, age2)

// console.log(calcAge2(1995))

/**
 * Arrow fuctions
 */


// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

//const calcAge3 = birthYear => 2037 - birthYear;

// the return is implicit

// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const agefull = 2037;
//     const retirement = 65;

//     let mathRetirement = agefull - birthYear;
//     let retirementFull = retirement - mathRetirement

//     return `${firstName} retires in ${retirementFull}`

//     // return retirementFull;
// }

//console.log(yearsUntilRetirement(1995, "Anthony"))
//console.log(yearsUntilRetirement(1997, "Maria"))

// const est = a =>
//     a * 3;

// console.log(est(2))


/**
 * Functions Calling Other Functions
*/


// function cutFruitsPieces(fruits) {
//     return fruits * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitsPieces(apples);
//     const orangePieces = cutFruitsPieces(oranges);


//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
//     return juice
// }

//console.log(fruitProcessor(4, 5))

/**
 * Reviewing functions
 */

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }



// const yearsUntilRetirement = function (birthYear, firstName) {
//     const agefull = calcAge(birthYear);
//     const retirement = 65;

//     let mathRetirement = agefull;
//     let retirementFull = retirement - mathRetirement

//     if (retirementFull > 0) {
//         console.log(`${firstName} retires in ${retirementFull}`);
//         return retirementFull;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
//     // everything that is executed after the return will not be visible


//     //return `${firstName} retires in ${retirementFull}`
//     // return retirementFull;
// }

// console.log(yearsUntilRetirement(1995, "Anthony"))
// console.log(yearsUntilRetirement(1750, "Anthony"))


/**
 * Introduccion to Arrays
 */

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter']

// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Anthony';
// console.log(friends)

// const firstName = 'Anthony';

// const Anthony = [firstName, 'Maldonado', 2021 - 1995, friends];
// console.log(Anthony);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1991, 1984, 2008, 2020]

// let age1 = calcAge(years[0]);
// let age2 = calcAge(years[1]);
// let age3 = calcAge(years[2]);

// console.log(age1, age2, age3);

// const ages = [age1, age2, age3]

// console.log(ages);


/**
 * Basic Array operations
 */

// const friends = ['Michael', 'Steven', 'Peter']

// //push method add elements to the end of the array
// const newLegth = friends.push('Ricardo')
// console.log(newLegth)
// console.log(friends);

// // unshift method add elements to the beginning of the array
// friends.unshift('Heczaid');
// console.log(friends);


//remove

// friends.pop() //last

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Anthony'));

// friends.push(23);
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'));
// //Coercion type
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log(`You have a friend called Steven`)
// }

/**
 * Introduccion to Objects
 */


// const Anthony = {
// firtsName: 'Anthony',
// lastName: 'Maldonado',
// yearOfBirth: 1995,
// job: 'Web developer',
// friends: ['Heczaid', 'Ricardo', 'Edinson']
// }

// const currentDate = 2021;

// console.log(Anthony.firtsName, Anthony.job, currentDate - Anthony.yearOfBirth)

// const Keyname = 'Name';

// console.log(Anthony['firts' + Keyname]);

// const interestedIn = prompt('What do you want to know about Anthony? Choose between firstName, lastName, yearOfBirth, job or friends');

// console.log(Anthony[interestedIn]);

// if (Anthony[interestedIn]) {
//     console.log(Anthony[interestedIn])
// } else {
//     console.log('you are not searching correctly')
// }


// Anthony.location = 'Venezuela';
// Anthony['Twitter'] = '@Anthony_Vim'

// console.log(Anthony)

// Anthony[interestedIn] ? console.log(Anthony[interestedIn]) : console.log('you are not searching correctly')

//Challenge
//"Anthony has 3 friends, and this best friend is called Ricardo"

// const totalFriends = (Anthony.friends).length
// const uniqueFried = Anthony.friends[1]
// console.log(totalFriends, uniqueFried);

// console.log(`${Anthony.firtsName} has ${totalFriends} friends, and this best friends is called ${uniqueFried}`)

/**
 * Objects methods
 */

// const Anthony = {
//     firtsName: 'Anthony',
//     lastName: 'Maldonado',
//     yearOfBirth: 1995,
//     job: 'Web developer',
//     friends: ['Heczaid', 'Ricardo', 'Edinson'],
//     hasDriverLicence: true,
//     // calcAge: function (birthYear) {
//     // return 2021 - birthYear
//     // }

//     // calcAge: function () {
//     // return 2021 - this.yearOfBirth
//     // }

//     calcAge: function () {
//         this.age = 2021 - this.yearOfBirth;
//         return this.age
//     }
// }

// console.log(Anthony.age)


/**
 * For loop
 */


// for loop keeps runnuing while condition is TRUE

// let ancho = 20;
// const multiplicador = 20;
// const largo = 30

// for (let rep = 1; rep <= multiplicador; rep++) {
//     console.log(`lifting weigths repetition ${rep}`)

// }

// const Anthony = [
//     'Anthony',
//     'Maldonado',
//     2021 - 1995,
//     'developer',
//     ['Ricardo', 'Brigitte'],
//     true
// ]
// let types = [];
// for (let i = 0; i < Anthony.length; i++) {
//     if (Anthony[i] === 'Maldonado') {
//         console.log(`exito ${Anthony[i]} position ${i}`)
//         break
//     } else {
//         console.log('no exito')
//     }
// };

// for (let i = 0; i < Anthony.length; i++) {
//     const persona = Anthony
//     console.log(persona[i], typeof persona[i])

//     types.unshift(typeof Anthony[i])
// }


// console.log(types)

// const years = [2021, 2007, 2012, 1952]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i])

// }

// console.log(ages)

//continue and break statement

// for (let i = 0; i < Anthony.length; i++) {
//     if (typeof Anthony[i] !== 'string') continue;

//     console.log(Anthony[i], typeof Anthony[i])

// }


/**
 *Looping Backwards and Loops in Loops
 */

// const Anthony = [
//     'Anthony',
//     'Maldonado',
//     2021 - 1995,
//     'developer',
//     ['Ricardo', 'Brigitte'],
//     true
// ]

// for (let i = Anthony.length - 1; i >= 0; i--) {
//     console.log(i, Anthony[i]);
// }

// for (let exercices = 1; exercices <= 4; exercices++) {
//     console.log(`=== Starting exercices ${exercices}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`=== Lifting weith repetition ${rep}`)

//     }
// }

/**
 * while loop
 */

// for (let rep = 1; rep <= 10; rep++) {
// console.log(`lifting weigths repetition ${rep}`)

// }


// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE:lifting weigths repetition ${rep}`)
//     rep++
// }

let dice = Math.trunc((Math.random() * 6) + 1)

while (dice !== 6) {
    console.log(`You rolle a dice ${dice}`)
    dice = Math.trunc((Math.random() * 6) + 1)

    dice === 6 ? console.log(`loop is about to end`) : console.log(`not end`)
}
