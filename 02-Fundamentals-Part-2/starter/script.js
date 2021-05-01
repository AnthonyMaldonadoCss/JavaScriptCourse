// Video1: Activating strict mode
// 'use strict';

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

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}



const yearsUntilRetirement = function (birthYear, firstName) {
    const agefull = calcAge(birthYear);
    const retirement = 65;

    let mathRetirement = agefull;
    let retirementFull = retirement - mathRetirement

    if (retirementFull > 0) {
        console.log(`${firstName} retires in ${retirementFull}`);
        return retirementFull;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // everything that is executed after the return will not be visible


    //return `${firstName} retires in ${retirementFull}`
    // return retirementFull;
}

console.log(yearsUntilRetirement(1995, "Anthony"))
console.log(yearsUntilRetirement(1750, "Anthony"))