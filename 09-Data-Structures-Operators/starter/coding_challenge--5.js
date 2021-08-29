'use strict';
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const x of flights.split('+')) {
  const [a, b, c, d] = x.split(';');

  const newA = a.replaceAll('_', ' ').trim();

  const newB = getCode(b);
  const newC = getCode(c);

  const newD = d.replaceAll(':', 'h');

  const finalString = `${
    newA.startsWith('Delayed') ? '🔴' : '✅'
  } ${newA} from ${newB} to ${newC} (${newD})`.padStart(49, '-');
  console.log(finalString);
}
