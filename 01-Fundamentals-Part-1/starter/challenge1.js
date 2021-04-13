/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK
*/

let marksWeights, marksTall, johnWeights, johnTall;

marksWeights = 78;

marksTall = 1.69;

johnWeights = 92;

johnTall = 1.95;

typeof (marksTall);

let markBMI = marksWeights / marksWeights ** 2;

let johnBMI = johnWeights / johnTall ** 2;

if (markBMI > johnBMI) {
    let markHigherBMI = true;
    console.log(markHigherBMI);
} else {
    let johnHigherBMI = false;
    console.log(johnHigherBMI);
}

let userOne = prompt("enter the first name to compare")
let weight1 = Number(prompt(userOne + " " + "enter your weight"));
let height2 = Number(prompt(userOne + " " + "enter your height"));

let userTwo = prompt("enter the second name to compare")
let weight3 = Number(prompt(userTwo + " " + "enter your weight"));
let height4 = Number(prompt(userTwo + " " + "enter your height"));

let firstBmi = weight1 / height2 ** 2;
let secondBmi = weight3 / height4 ** 2;

typeof (firstBmi, secondBmi);

if (firstBmi > secondBmi) {
    console.log(userOne + " " + "your BMI is higher")
} else {
    console.log(userTwo + " " + "your BMI is higher")
}






