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

function logger() {
    console.log('My name is Anthony');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}

console.log(fruitProcessor(5, 3))

const applejuice = fruitProcessor(25, 5);
console.log(applejuice);

//Extra

console.log(typeof (0));

function fruitJuice(x, y) {
    if (x === 0) {
        alert(`you have to enter a valid number ${x}`)
    } else if (y === 0) {
        alert(`you have to enter a valid number ${y}`)
    } else {
        const juiceCall = (`the juice is made up of: ${x} apples y ${y} bananas`)
        return juiceCall
    }
}

let x = prompt('enter the number of apples you want in its juice');
const clientJuice = fruitJuice(x, 25);
console.log(clientJuice);