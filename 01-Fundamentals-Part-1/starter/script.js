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
