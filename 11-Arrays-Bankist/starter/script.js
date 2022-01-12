'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Anthony Jose Maldonado Loiz',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/**
 * Creating DOM Elements
 */

const displayMovement = function(movements){

  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `

    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}&nbsp;€</div>
    </div>
    
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });

}
displayMovement(account1.movements)

/**SUM TOTAL ACCOUNT */
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${balance} EUR`;
}

calcDisplayBalance(account1.movements)
/************************************ */


/***Summary */

const calcDisplaSummary =  function(movement){

  const incomes = movement.filter(mov => mov > 0)
                          .reduce((acc, curr) => acc  + curr, 0);
  const outcomes =  movement.filter(mov => mov < 0)
                            .reduce((acc, curr) => acc  + curr, 0);
  
  const interest = movement.filter(mov => mov > 0)
  .map(deposit => deposit * (1.2/100))
  .filter((acc, curr, i) =>
  { 
    console.log(acc + ":" + curr)
    return acc >= 1
  })
  .reduce((acc, curr) => acc + curr);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${interest}€`
}
calcDisplaSummary(account1.movements)

/** */
const createUserNames = function(accs){
  
  accs.forEach(function(acc){
    
    //username no esta creado, es una propiedad que se crea una vez llamado la funcion

    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map((name) => name[0])
    .join('')
  });
};

//console.log(createUserNames(accounts))




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//Slice method
let arr = ['a','b','c','d','e']
//desde la posicion 2 en adelante 
//este metodo no muta el array original
/*console.log(arr.slice(1))
console.log(arr.slice(2,4))
console.log(arr.slice(-2))
console.log(arr.slice(-1))
console.log(arr.slice(1, -2))
console.log(arr.slice())
console.log([...arr])

//Splice method
//este metodo si muta el array original
console.log(`splice method`)
// console.log(arr.splice(2))
console.log(arr)
arr.splice(-1)
console.log(arr)
arr.splice(1,2)
console.log(arr)

//Reverse method
//este metodo si muta el array original

arr = ['a','b','c','d','e']
const arr2 = ['j','i','h','g','f']
console.log(`reverse method`)
console.log(arr2.reverse())
console.log(arr2)

//Concat method
console.log(`concat method`)
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

//Join Method

console.log(`join method`)

console.log(letters.join('-'))*/

/**
 * Looping Arrays: For Each 
 */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(`-----FOR OF LOOP-----`)

// for(const move of movements){

// for(const [i, move] of movements.entries()){
// if(move > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${move}`)
//   } else {
//     console.log(`Movement ${i + 1}: You Witdrew ${Math.abs(move)}`)
//   }
// }

// console.log(`------FOREACH-------`)
// 1 parametro: el elemento actual
// 2 parametro: la posicion del elemento actual
// 3 parametro: el array que estamos recorriendo

// movements.forEach((movement, index, array) => {
//   if(movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${index + 1}: You Witdrew ${Math.abs(movement)}`)
//   }
// });

/**
 * For Each with maps and sets
 */


 /*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);*/

// 1 parametro: el valor actual
// 2 parametro: el key del objeto
// 3 parametro: el elemento completo

/*currencies.forEach((value, key, map) =>{
  console.log(`${key}: ${value}`)
})*/

//SET
/*const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`])

console.log(currenciesUnique)

currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`)
})*/


/**
 * The map method
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

/*const movementsUsd =  movements.map(function(mov){
  	return Math.round(mov * eurToUsd)
})*/

const movementsUsd = movements.map((mov) => Math.round(mov * eurToUsd))

// console.log(movements)
// console.log(movementsUsd)


const movementUSDfor = [];
for(const mov of movements) movementUSDfor.push( Math.round(mov * eurToUsd))

// console.log(movementUSDfor)

const movementsDescriptions = movements.map((mov, i) => 
  
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  
  
 /* if(movement > 0) {
         console.log(`Movement ${index + 1}: You deposited ${movement}`)
       } else {
         console.log(`Movement ${index + 1}: You Witdrew ${Math.abs(movement)}`)
   }*/
)

// console.log(movementsDescriptions)


/**
 * The filter method
 */

//console.log(movements)

// const deposits =  movements.filter((mov) => mov > 0)
// console.log(deposits)


// const depositFor = []
// for (const mov of movements) if(mov > 0 ) depositFor.push(mov)

// console.log(depositFor)

// const witdrawals = movements.filter((mov) => mov < 0)
// console.log(witdrawals)

/**
 * The Reduce Method
 */

console.log(...movements)

//Acummulator -> SNOWBALL
//El cero es de donde va a comenzar el acumulador
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur
// }, 0)

//  const balance = movements.reduce((acc, cur) => acc + cur, 0)

//  console.log(balance)

//  let balance2 = 0;
//  for(const mov of movements) balance2 += mov
//  console.log(balance2)

//Maximum value

// const max = movements.reduce((acc, cur) => {
//   if(acc > cur){
//     return acc 
//   } else {
//     return cur
//   }
// },movements[0])

// console.log(max)

/**The Magic of chaining methods */

//PIPELINE
const totalDepositedUSD = movements.filter((mov) => mov > 0)
                                   .map(mov => (mov * eurToUsd))
                                   .reduce((acc, curr) => acc + curr, 0 )

console.log(totalDepositedUSD.toFixed(2))