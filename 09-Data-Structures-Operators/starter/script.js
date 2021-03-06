'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// let item = '';
for (let item of weekdays);

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    //return string
    // return `${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}`;

    //return array
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderTwo: (startIndex, mainIndex) => {
  //   return [this.starterMenu[startIndex]], [this.mainMenu[mainIndex]];
  // },

  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = `20:00` }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} anddd ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicius pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza(ingredients, ...otherIngredients) {
    //Rest pattern
    const [
      a = `no escogio`,
      b = `no escogio`,
      c = `no escogio`,
      d = `no escogio`,
    ] = otherIngredients;
    console.log(typeof otherIngredients);

    console.log(a, b, c, d);
    if (otherIngredients.length === 0) {
      console.log(ingredients);
      console.log(`no hay ingredientes extras`);
    } else {
      console.log(`this ingredients in: ${ingredients}`);
      console.log(
        `Your pizza order has the following ingredients ${a}, ${b}, ${c}, ${d}`
      );
    }

    // console.log(ingredients);
    // console.log(otherIngredients);
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(x);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//nested destructuring
// const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
// const [p, q, r] = [8, 9];
//si no tiene valor que asignar, asigna el 1 que se definio
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
// name: restaurantName,
// openingHours: hours,
// categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

//si se comienza una linea de codigo, con brackes js da error
//el espera un bloque de codigo
//por ende hay que encerrarlo en parantesis
// ({ a, b } = obj);
// console.log(a, b);

//nested objects
// const {
// fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
// time: '22:30',
// address: 'Via del Sole, 21',
// mainIndex: 2,
// starterIndex: 2,
// });

// restaurant.orderDelivery({
// address: 'Quebec, 2',
// });
// const arr = [2, 3, 4];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);
// let iterator;

// for (let i = 0; i <= arr.length; i++) {
// iterator = arr[i];
// }
// const goodArr = [1, 2, iterator];

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

//Copy arrays

// const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

//Spread operator
// const NewMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
//Concat method
// const concatenar = restaurant.mainMenu.concat(restaurant.starterMenu);
// console.log(NewMenuCopy, concatenar);

//Iterables:arrays, string, maps, sets. NOT objects
// const anthony = `Anthony`;
// const letters = [...anthony, ',', 'S.'];
// console.log(letters);
//does not work because does not expect comma-separated values
//console.log(${...anthony});

//Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt('Ingredients 2'),
//   prompt('Ingredients 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//objects
// const newRestaurant = { foundedIn: 1991, ...restaurant, founder: `Giussepe` };
// console.log(newRestaurant);

// const restauranCopy = { ...restaurant };
// restauranCopy.name = `Ristorante Roma`;
// console.log(restauranCopy.name);
// console.log(restaurant.name);

//Rest pattern and parameters

//Destructuring
//Spread, because on Rigth side of =
// const arr = [1, 2, ...[3, 4]];

//Spread, because on left side of =

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rissotto, ...otherFood] = [
// ...restaurant.mainMenu,
// ...restaurant.starterMenu,
// ];

// console.log(pizza, rissotto, otherFood);

//objects
// const { sat, ...otherdays } = restaurant.openingHours;
// console.log(otherdays, sat);

//2 Functions

// const add = function (...numbers) {
// console.log(numbers);
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// console.log(sum);
// };
// add(2, 3);
// add(4, 7, 8, 9);
// add(5, 90, 34, 12);

// restaurant.orderPizza(`Mushrooms`, `onion`, `mozarella`, `anchoas`, `pescao`);
// restaurant.orderPizza(`more mozarella`);

//Short circuiting (&& and ||)

// console.log(`====OR====`);

//El condicional OR devuelve el primer true en la cadena de comparacion que este ejecutando
//si no hay ninguno, la ultima opcion de la cadena

// console.log(3 || `Anthony`);
// console.log(`` || `Anthony`);
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || `` || `hello` || 23 || null);

//El corto circuito se da porque el evalua hasta la primera condicion que sea true
//y retorna ese primer true, los demas los omite

// restaurant.numGuest = 0;
// const gues1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(gues1);

//evalua esta condicion, si es undefined o con cualquier otro valor falsy, le asigna el 10
//si no es undefined le asigna el 23
// const gues2 = restaurant.numGuest || 10;
// console.log(gues2);

// console.log(`====IF====`);

//al contrario del operador OR
// el AND devuelve el primer valor falsy que encuentre en la condicion

// console.log(0 && `Anthony`);
// console.log(7 && `Anthony`);

// console.log(`hello` && 23 && null && `anthony`);
//en este caso ninguno cumple con la condicion del true
//ya que todos son true
//y el devuelve el ultimo valor de esta cadena (esto no quiere decir que ese valor es falsy)
// console.log(`hello` && 23 && 45 && `anthony`);

//practical example
// if (restaurant.orderPizza) {
// restaurant.orderPizza(`mushrooms`, `spinach`);
// }
//nullish coalescing operator
// restaurant.numGuest = 20;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

//nullish: null and undefined (NOT 0 or ``)
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// const numerosPrimos = function (num) {
//   let iterador = 0;
//   for (let i = 0; i < num.length; i++) {
//     iterador = num[i];
//     console.log(iterador);
//   }

//   let operador = [];
//   iterador % 2;
//   console.log(operador);
//   console.log(iterador);
// };

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numerosPrimos(numeros);

// for Of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
// console.log(item);
// }
// for (const [i, el] of menu.entries()) {
// console.log(`${i + 1}: ${el}`);
// }
// for (const item of menu) {
// const [a, b, c, d, e, f, g, h, i] = item;
// console.log(a, b, c, d, e, f, g, h, i);
// }

/**
Optional chaining (?)
 */
// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.thu.open);

//Whit optional chaining

//para verificar si una propiedad existe dentro de un arreglo
// console.log(restaurant.openingHours.thus?.open);

//example
//recordar usar el for of loop para recorrer arrays
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
// const open = restaurant.openingHours[day]?.open; // with nullish coalescing operator = ?? "close"
// console.log(
// `On ${day}, ${open === undefined ? 'not working ' : open + ' hours'}`
// );
// }

// for (const day of weekdays) {
//   const action =
//     restaurant.openingHours[day]?.close &&
//     restaurant.openingHours[day]?.close;
// console.log(`${day}, ${action}`);
// }
// Methods

// console.log(restaurant.order?.(0, 1) ?? `Method does not exits`);
// console.log(restaurant.orderRissoto?.(0, 1) ?? `Method does not exist`);

//Arrays
// const currentDate = 2021;
// const user = [
//   {
//     name: `Anthony`,
//     email: `anthonysistemas20@gmail.com`,
//     age: currentDate - 1997,
//   },
//   { name: `Heczaid`, email: `anthony@gmail.com`, age: currentDate - 1995 },
// ];
// console.log(user[0]?.name ?? 'User array empty');

// for (const item of user) {
// console.log(item);
// }

// if (user.length > 0) console.log(user[0].name);
// else console.log(`user array empty`);

/**
 * Looping Objects: Object Keys, Values, and Entries
 */

//   for (const day of Object.values(openingHours)) {
//     console.log(day);
//   }

// const propierties = Object.keys(openingHours);
// console.log(propierties);

// let OpenStr = `We are open on ${propierties.length} days: `;

// for (const day of propierties) {
//   OpenStr += `${day},`;
// }
// console.log(OpenStr);

// //Property values
// const values = Object.values(openingHours);
// console.log(values);

// //entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

/**SETS */
// const orderSet = new Set([`pizza`, `pasta`, `pasta`, `focaccia`, `pizza`]);
// console.log(orderSet);

// console.log(new Set(`anthony`));

// console.log(orderSet.size);
//consulting
// console.log(orderSet.has(`bread`));
// console.log(orderSet.has(`pizza`));
// //update
// orderSet.add(`garlic bread`);
// orderSet.add(`garlic bread`);
// console.log(orderSet);
// //delete
// orderSet.delete(`focaccia`);
// console.log(orderSet);

//iterable
// for (const x of orderSet) console.log(x);

// const staff = [`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set([`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`]).size
// );

/***** */
/**Map: fundamentals */
// const rest = new Map();
// rest.set(`name`, `clasico italiano`);
// rest.set(1, `Firenze, italy`);
// console.log(rest.set(2, `Lisbon, Portugal`));

// rest
// .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set(`open`, 11)
// .set(`close`, 23)
// .set(true, `We are open`)
// .set(false, `We are close`);

// console.log(rest.get(1));
// console.log(rest.get(`name`));
// console.log(rest.get(true));

// const time = new Date();
// const hours = time.getHours();
// console.log(rest.get(hours > rest.get(`open`) && hours < rest.get(`close`)));

// console.log(rest.has(`categories`));
// rest.delete(2);
// rest.clear();
// const arr = [1, 2];
// rest.set(arr, `Test`);
// rest.set(document.querySelector(`h1`), `heading`);
// console.log(rest.get(arr));
// console.log(rest.size);

/**Maps: iteration */
// const question = new Map([
// [`question`, `whats is the best programming language in the world?`],
// [1, `c`],
// [2, `Java`],
// [3, `JavaScript`],
// [`correct`, 3],
// [true, `correct`],
// [false, `Try again`],
// ]);
// console.log(question);

//Convert Object to Map
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz app
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Answer ${key}: value ${value}`);
// }

// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// console.log(question.get(question.get(`correct`) === answer));

/**
 * Working with String - Part 1
 */

const airline = `TAP Air Portugal`;
const plane = `A320`;
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(`B737`[0]);

// console.log(airline.length);
// console.log(`b737`.length);
// console.log(airline.indexOf(`r`));
// console.log(airline.lastIndexOf(`r`));
// console.log(airline.indexOf(`Portugal`));

// console.log(airline.slice(4));
// suma el segundo digito mas el primero = 11 y va de atras hacia adelante
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
// const s = seat.slice(-1);
// console.log(s);
// if (s === `B` || s === `E`) console.log(`You got the middle seat`);
// else console.log(`You got lucky`);
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

//los string's no deberian tener metodos porque son primitivos
// pero al hacer estas operaciones se convierten en objetos+
// a este proceso se le conoce como "boxing"

// console.log(new String('Anthony'));
// console.log(typeof new String('Anthony'));

// console.log(typeof new String('Anthony').slice(1));
// console.log(new String('anthony').slice(2));

// const Anthony = [...`anthony`];
// console.log(typeof Anthony[0]);

/**
 * Working with Strings -  Part 2
 */

//text tranform (uppercase - lowercase)
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//normalizar a capital letter
const passenger = `anthOny`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + ` ` + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails

const email = `hello@anthony.io`;
const loginEmail = `   Hello@Anthony.Io \n`;
console.log(loginEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing

const priceGB = `288,97@`;
const priceUS = priceGB.replace(`@`, `$`).replace(`,`, `.`);
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23`;
console.log(announcement.replace(`door`, `gate`));

//new method
console.log(announcement.replaceAll(`door`, `gate`));

//with regular expression
console.log(announcement.replace(/door/g, `gate`));

//Booleans

const plane1 = `Airbus A320neo`;
console.log(plane1.includes(`A320`));
console.log(plane1.includes('Boeing'));
console.log(plane1.includes('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo'))
  console.log('Part of the new Airbus family');
else console.log("It's  a old plane");

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();

  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage(`I have a laptop, some Food, and pocket knIfe`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
