/**
 * Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
 */

const scoreDolphinsGameA = 96;
const scoreDolphinsGameB = 108;
const scoreDolphinsGameC = 89;

let totalGameScoreDolphins = (scoreDolphinsGameA + scoreDolphinsGameB + scoreDolphinsGameC);
console.log(`Score Dolphins is: ${totalGameScoreDolphins}`);

let averageDolphins = (totalGameScoreDolphins / 3);
console.log(`the average is: ${Math.round(averageDolphins)}`);

const scoreKoalasGameA = 88;
const scoreKoalasGameB = 91;
const scoreKoalasGameC = 110;

let totalGameScoreKoalas = (scoreKoalasGameA + scoreKoalasGameB + scoreKoalasGameC);
console.log(`Score Koalas is: ${totalGameScoreKoalas}`);

let averageKoalas = (totalGameScoreKoalas / 3);
console.log(`Average Koalas is: ${Math.round(averageKoalas)}`);

console.log(`the score and average for the Dolphins is ${totalGameScoreDolphins} & ${Math.round(averageDolphins)},  the score and average for the Koalas is ${totalGameScoreKoalas} & ${Math.round(averageKoalas)}`);

if (totalGameScoreDolphins > totalGameScoreKoalas) {
    console.log(`dolphins win`)
} else {
    console.log(`Koalas win`)
}


if (totalGameScoreDolphins === totalGameScoreKoalas) {
    console.log(`There was a tie for score`)
} else if (totalGameScoreDolphins === totalGameScoreKoalas && scoreAllDolphins === scoreAllKoalas) {
    console.log(`There was a tie for score and average`)
} else {
    console.log(`there was no tie neither by score nor by average`)
}