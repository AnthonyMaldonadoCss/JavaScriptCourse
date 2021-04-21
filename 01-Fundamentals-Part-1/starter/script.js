/*let js = "amazing";
if (js === "amazing") {
    alert("JavaScript is fun")
}
let operaciones = 40 + 8 + 23 - 10
console.log(operaciones);

window.onload = proyecto;

function proyecto() {
    alert("JavaScript conectado");
}
console.log("hello")

let firtName = "Anthony"

console.log("hello " + firtName);
*/
//Booleans

/*
let JavaScriptIsFun = false;

if (JavaScriptIsFun == true) {
    console.log("De verdad es divertido")
} else {
    alert("utilidades del boolean")
}

console.log(typeof Boolean);
console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Anthony');

let year;
console.log(year);
console.log(typeof year);
*/
/*
let JavaScriptIsFun = false;

if (JavaScriptIsFun == true) {
    console.log("De verdad es divertido")
} else {
    switch (JavaScriptIsFun) {
        case false:
            let alerta;
            JavaScriptIsFun = true
            alerta = typeof JavaScriptIsFun
            break;

        default:
            alert(alerta)
            break;
    }
}
*/
// > undefined

/**
 * let, cons & var
 */

/*
let age = 30;
age = 31;
console.log(age)

// > 31

const birthYear = 1991;
birthYear = 1990;
console.log(birthYear)

// > TypeError: Assignament to constant variable

const job;
console.log(job)
// > missing initializer in const declaration

var job = "programmer";
job = "teacher";
console.log(job):

// > teacher

lastName = "maldonado";
console.log(lastName)
// > maldonado

const now = 2037;
const ageAnthony = now - 1991;
const ageHeczaid = now - 2021;

console.log(now - 1991 > now - 2018);

//operator precedence

let x, y

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageAnthony + ageHeczaid) / 2;
console.log(ageAnthony, ageHeczaid, averageAge);
*/

/**
 *String and template literals
*/
/*
let firsName = "Anthony";
let lastName = "Maldonado";
let job = "Developer";
let birthYear = 1995;

let personAnthony = "I, m " + firsName + " " + lastName + ', a' + birthYear + 'years old' + job;
console.log(personAnthony);

const personaNew = `I'm ${firsName} ${lastName}, a ${birthYear} years old ${job}`;
console.log(personaNew);

console.log(`Just a regular string ...`)

console.log(' String with \n\
multiple \n\
lines ')

console.log(`String
multiple
lines`)
*/

/**
 * 18. Taking desicions: if / else statements
*/

/*
const age = 18;
if (age >= 18) {
    console.log(`Sarah can start driving licence`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 1995;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/**
 * Type conversion and coercion
 */

//Type conversion

/*
const inputYear = '1991';

console.log(Number(inputYear), inputYear);

typeof (inputYear);

console.log(inputYear + 18);

console.log(Number("Anthony"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1; // '11' = '11' - 1 coercion to number

console.log(n); // 10 number
*/

/**
 * 21. Truthy and falsy values
 */

// 5 falsy values: 0, ' ', undefined, null, NaN


/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Anthony'));
console.log(Boolean({}));

const money = 100;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;

if (height) {
    console.log("YAY! height is defined");
} else {
    console.log("height is UNDEFINED")
}

*/

/**
 * Equality operators: == & ===
*/

/*
const age = '18';

if (age === 18) console.log("You just became an adult (Strict)")

if (age == 18) console.log("You just became an adult (loose)")


const favourite = Number(prompt("what's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
    console.log("7 is also a cool number")
} else {
    console.log("Number is not 23 or 7")
}

if (favourite !== 23) {
    console.log("why not 23?")
}
*/

/**
 * Logical Operators
 */

// const hasDriverLicence = true;
// const hasGoodVision = true;

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasGoodVision || hasDriverLicence);
// console.log(!hasDriverLicence);

// if (hasDriverLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive");
// }

// const isTired = false;

// console.log(hasDriverLicence && hasGoodVision && isTired);

// if (hasDriverLicence && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive");
// }

/**
 * the switch Statement
 */

// const day = "friday";

// switch (day) {
//     case "Monday": // day === "monday"
//     case "monday":
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`)
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`)
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write the code examples`)
//         break;
//     case 'friday':
//         console.log(`Record the videos`)
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend`)
//         break;
//     default:
//         console.log(`Not a valid day!`)
// }

// quick test
// converto to if

// if (day === 'monday' || day === "Monday") {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`)
// } else if (day === 'tuesday') {
//     console.log(`Prepare theory videos`)
// } else if (day === 'wednesday' || day == 'thursday') {
//     console.log(`Write the code examples`)
// } else if (day === 'friday') {
//     console.log(`Record the videos`)
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend`)
// } else {
//     console.log(`Not a valid day!`)
// }

/**
 * the conditional (ternary) operator
 */

const age = 17;

// age >= 18 ? console.log(`I like to drink wine`) : console.log(` i like to drink water`);

let drink = age >= 18 ? `drink wine` : `drink water`;

console.log(drink);

let drink2;

if (age >= 18) {
    console.log(`drink wine`)
} else {
    console.log(`drink water`)
}

console.log(`i like to ${age >= 18 ? `drink wine` : `drink water`}`)