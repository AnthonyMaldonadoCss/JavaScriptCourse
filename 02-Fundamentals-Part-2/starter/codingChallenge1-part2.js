'use strict';

/**
 *Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 */

/**********DOLPHINS SCORES***/

const dolphinScore1 = 85;
const dolphinScore2 = 54;
const dolphinScore3 = 41;
/*************************/

/**Koalas Scores */

const koalaScore1 = 23;
const koalaScore2 = 34;
const koalaScore3 = 27;
/**********************/


const calcAverage = (s1, s2, s3) => {
    const calcAverageFinal = (s1 + s2 + s3) / 3;
    return calcAverageFinal;
}

const averagefinalDolphins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
const averagefinalKoalas = calcAverage(koalaScore1, koalaScore2, koalaScore3);

const checkWinner = function (avgDolphins, avgKoalas) {
    const calc1 = avgDolphins * 2;
    const calc2 = avgKoalas * 2;

    if (calc1 > calc2) {
        console.log(`Dolphins win's ${calc1}`)
    } else {
        console.log(`Koalas win's ${calc2}`)
    }
}

const winner = checkWinner(averagefinalDolphins, averagefinalKoalas);

console.log(averagefinalKoalas, averagefinalDolphins);


//console.log(calcAverage(dolphinScore1, dolphinScore2, dolphinScore3));