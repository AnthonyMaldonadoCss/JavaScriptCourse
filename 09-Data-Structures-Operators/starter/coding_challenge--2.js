/**
 * Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// solution 1

// const scored = game.scored;
// console.log(scored);

for (const [key, value] of game.scored.entries()) {
  // console.log(`Goal ${key + 1}: ${value}`);
}

// solution 2

const {
  odds: { team1, x, team2 },
} = game;
// console.log(team1, x, team2);

//obtuve los valores en un objeto
const odds = { ...game.odds };
// console.log(odds, typeof odds);

const mediaOdd = function (media) {
  const values = Object.values(media);
  // console.log(media);
  // console.log(values);

  let sum = 0;
  for (let i = 0; i < values.length; i++) sum += values[i];
  const mediaOdd = Math.round(sum / values.length);
  console.log(`the odd is ${mediaOdd}`);
};
// mediaOdd(odds);

//solution 2 (teacher)
const values = Object.values(game.odds);
let average = 0;

for (const i of values) average += i;
average /= values.length;
// console.log(Math.round(average));
/******************************** */

// solution 3

for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

const scorers = {};

// for (let x of game.scored) {
//   if (scorers[x]) {
//     scorers[x]++;
//   } else {
//     scorers[x] = 1;
//   }
// }

for (let x of game.scored) {
  console.log(x);
  scorers[x]++ || (scorers[x] = 1);
}

console.log(scorers);
