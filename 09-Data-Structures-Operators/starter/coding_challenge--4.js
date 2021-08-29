'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const first = 'underscore_case';

/**
   * Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase
firstName ✅
✅✅
someVariable
calculateAge ✅✅✅
✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§
This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
   */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const camelCase = function (string) {
  console.log(string);

  for (const i of string) {
    console.log(i);
    const [first, second] = i.toLowerCase().trim().split('_');
    console.log(first, second);
    console.log(
      `${first}${second.replace(second[0], second[0].toUpperCase())}`
    );
  }

  /*const [first, second] = string.toLowerCase().trim().split('_');
  console.log(first, second);
  const AllStr = [];

  const newSecond = second.replace(second[0], second[0].toUpperCase());

  console.log(`${first}${newSecond}`);*/

  /*for (const n of normalize) {
    AllStr.push(n.replace(n[0], n[0].toUpperCase()));

    const NewString = AllStr.join('');

    console.log(NewString);
  }*/
};

//camelCase(['lindo_dia', 'OTRO_DIA', 'esto_otro']);

document.querySelector('button').addEventListener('click', function (string) {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(rows);

  for (const [i, value] of rows.entries()) {
    const [first, second] = value.toLowerCase().trim().split('_');
    // console.log(`Iteration ${i + 1}, value ${value} = ${first}, ${second}`);
    const str = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${str.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }

  /*console.log(string);

  for (const i of string) {
    console.log(i);
    const [first, second] = i.toLowerCase().trim().split('_');
    console.log(first, second);
    console.log(
      `${first}${second.replace(second[0], second[0].toUpperCase())}`
    );
  }*/
});
