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

