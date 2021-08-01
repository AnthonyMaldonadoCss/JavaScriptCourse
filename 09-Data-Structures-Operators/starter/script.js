'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    //return string
    // return `${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}`;

    //return array
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderTwo: (startIndex, mainIndex) => {
  //   return [this.starterMenu[startIndex]], [this.mainMenu[mainIndex]];
  // },

  openingHours: {
    thu: {
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
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = `20:00`,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} anddd ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicius pasta with ${ing1},${ing2} and ${ing3}`);
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
const arr = [2, 3, 4];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);
let iterator;

for (let i = 0; i <= arr.length; i++) {
  iterator = arr[i];
}
const goodArr = [1, 2, iterator];

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

//Copy arrays

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

//Spread operator
const NewMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
//Concat method
const concatenar = restaurant.mainMenu.concat(restaurant.starterMenu);
console.log(NewMenuCopy, concatenar);

//Iterables:arrays, string, maps, sets. NOT objects
const anthony = `Anthony`;
const letters = [...anthony, ',', 'S.'];
console.log(letters);
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
const newRestaurant = { foundedIn: 1991, ...restaurant, founder: `Giussepe` };
console.log(newRestaurant);

const restauranCopy = { ...restaurant };
restauranCopy.name = `Ristorante Roma`;
console.log(restauranCopy.name);
console.log(restaurant.name);
