'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300, 5050505,2323232],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
    '2023-01-14T10:51:36.790Z',
    '2022-12-20T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT'//'es-Es'  // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayDate = function(date = new Date(), locale, where = 'header'){
  const calcDaysPassed = (date1,date2)=> Math.round(Math.abs(date2-date1) / (1000 * 60 * 60 * 24))
  const daysPassed = calcDaysPassed(new Date(), date);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month:'long',
    year:'numeric',
    weekday: 'long'
  } 
  if(where != 'header'){
    if(daysPassed === 0)return `Today`
    else if(daysPassed === 1)return `Yesterday`
    else if(daysPassed <= 7)return ` ${daysPassed} days ago`
    else {
      // const day = `${date.getDate()}`.padStart(2,0);
      // const month = `${date.getMonth() + 1}`.padStart(2,0);
      // const year = date.getFullYear();
      // const hour = date.getHours();
      // const min = date.getMinutes();
      // return `${day}/${month}/${year} ${(!short) ? `${hour}: ${min}` : ''} `
 
      return new Intl.DateTimeFormat(locale).format(date);
    }
  } else {
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
}
const numberFormat = function(locale,currency, value) {
  return new Intl.NumberFormat(locale, {
    style:'currency', 
    currency: currency
  }).format(value)
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    let date = new Date(acc.movementsDates[i]);
    date = displayDate(date, acc.locale, 'movements');
    
    const formattedMov =  numberFormat(acc.locale, acc.currency, mov)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${date}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0); 
  let formattedBalance = numberFormat(acc.locale, acc.currency, acc.balance)
  labelBalance.textContent = `${formattedBalance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = (acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  );
  let formattedIncomes = numberFormat(acc.locale, acc.currency, incomes)
  labelSumIn.textContent = `${formattedIncomes}`;
  
  const out = (acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  );
  let formattedOut = numberFormat(acc.locale, acc.currency, out)
  labelSumOut.textContent = `${formattedOut}`;

  const interest = (acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0)
  );
  let formattedInterest = numberFormat(acc.locale, acc.currency, interest)
  labelSumInterest.textContent = `${formattedInterest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const closeSession = function(){
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
}

const startLogOutTimer = function(){
  //Set time to 5 minutes
  let time = 20;
  
  const tick = function(){
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const seconds =  String(time % 60).padStart(2,0);
    //in Each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${seconds}`;


    //When 0 seconds, stop timer and log out user
    if(time === 0){
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    //Decrease 1s
    time--;
  } 
  //call the timer every second
  const timer = setInterval(tick, 1000);

  return timer;
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//Fake Always logged in
// currentAccount = account1;
// updateUI(currentAccount)
// containerApp.style.opacity = 100;


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  let date = new Date();
  labelDate.textContent =  displayDate(date,currentAccount.locale, 'header');

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if(timer) clearInterval(timer)
    
    //initialice Set time Out
    timer = startLogOutTimer();
    
    // Update UI
    updateUI(currentAccount);
    
    //Reset timer
    // clearInterval(timer);
    // timer = startLogOutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 1500);
  }
  inputLoanAmount.value = '';

});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  closeSession()

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//check if valuie is NaN
// console.log(isNaN("dsd")); 
// console.log(isNaN('20'));
// console.log(isNaN(23/0));

//checking if value is number
// console.log(isFinite(20));
// console.log(Number.isFinite(+'20'));


// console.log(Number.isInteger(12));

/**
 * Math and rounding
 */

//raiz cuadrada
// console.log(Math.sqrt(25));
// console.log(25 ** (1/2));

//número máximo
let testNumbers = [2,3,5,6,14,53,67,678,8,5,23,1];
let testNumbersWithS = [2,3,5,6,14,53,67,678,8,5,23,1,'679']
let testNumbersWithPx = [2,3,5,6,14,53,67,678,8,5,23,1,'679', '777px']

// console.log(Math.max(...testNumbers));
// console.log(Math.max(...testNumbersWithS));
// console.log(Math.max(...testNumbersWithPx));

/**
 * por cada número dado lo parsea a number, si el mayor es NaN ese será retornado
 */

//obtener el área de una circunferencia
//teniendo el radio
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

//Obtener un numero random

// console.log(Math.trunc(Math.random() * 6) + 1);

//obtener un numero random entre dos numeros dados
const randomInt = (min = 1, max = 10) => Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(5,10));

//Rounding integers

//delete any float after the comma
// console.log(Math.trunc(23.2));
// //round number to up
// console.log(Math.round(23.5));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));


// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));



//Rounding decimals
// console.log(typeof (2.3).toFixed(3));
// console.log((2.3).toFixed(0));
// console.log((2.3).toFixed(3)); //rellena los faltantes con 0


/**
 * the remainder operator
 */

//return the rest the divide 

// console.log(5%2);
// console.log(5/2);
// console.log(8%2);

//podemos saber si un numero es par o impar
const isEven = (n) => n % 2 === 0;

// console.log(isEven(6));
// console.log(isEven(6));
// console.log(isEven(5));
// console.log(isEven(5));

labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
    if(i % 2 == 0) row.style.backgroundColor = 'orangered'
  })
})


/**
 * Numeric separators
 */

// const diameter = 287_988_000_000;
// console.log(diameter);

// const priceCents = 345_2323;
// console.log(priceCents);

// const transferFee = 15_0;
// const transferFee2 = 1_000;

// const PI = 3.14_15 
// console.log(PI);

/**
 * BIG INT
 */

// console.log(2 ** 53 -1);
//este es el número mas grande que puede trabajarse de manera segura en JS
// no es que no pueda representar mas despues de éste, solo que los resultados
//no seran seguros
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(2 ** 53 + 5);

//con esto podemos indicamos que tenemos un numero muy grande con el que trabajar
//pasando por alto la validacion de max_safe_integer
// console.log(345345623645634664563456345632778967896773412326678678467n);
// console.log(BigInt(345345623645634664563456345632778967896773412326678678467) > Number.MAX_SAFE_INTEGER);

//Operations

// console.log(10000n+10000n);
// console.log(345345623645634664563456345632778967896773412326678678467n * 100000n);

//no es posible operar BigInt con numeros regulares

// const huge = 234234234234654456786745363745456345n
// const num =  23
// console.log(huge * num);

//pero si podemos compararlos
// console.log(20n > 0);
// console.log(20n === 20); //esto da false porque un BigInt no es un regular number

//Division

// console.log(20n/3n);
// console.log(20/3);

/**
 * Dates and times
 */

//Create a date

const now = new Date()
// console.log(now);
// console.log(new Date('December 24, 2023'));

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2023,10,19,15,23,5));
// console.log(new Date(2023,10,31));
// console.log(new Date(1*24*60*60*1000));
// console.log(new Date(3*24*60*60*1000));


//Working with Dates

// const future = new Date(2037,10,31, 15, 23)
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate()); //dia 
// console.log(future.getDay()); //dia de la semana 1-5
// console.log(future.getHours());
// console.log(future.getSeconds());
// console.log(future.getMinutes());
// console.log(future.getUTCDate());
// console.log(future.getTime());

// console.log(Date.now());

// future.setFullYear(2040) //hay un set por cada parte de la fecha
// console.log(future);


/**
 * Operations with Dates
*/

// const future = new Date()
// console.log(+future);

// const calcDaysPassed = (date1,date2)=> Math.abs(date2-date1) / (1000 * 60 * 60 * 24)

// console.log(calcDaysPassed(new Date(2023,1,15), new Date(2023,1,25)))


/**
 * Internationalizing numbers
*/
const optionsNumber = {
  style: 'currency',//'percent',//'unit',
  unit: 'celsius',//'mile-per-hour',
  currency: 'USD',
  useGrouping: true
}

const num = 23234234234
console.log(new Intl.NumberFormat('es-Es', optionsNumber).format(num));
console.log(new Intl.NumberFormat('en-Us',optionsNumber).format(num));
console.log(new Intl.NumberFormat('de-DE', optionsNumber).format(num));
console.log(new Intl.NumberFormat('ar-SY', optionsNumber).format(num));
console.log(new Intl.NumberFormat(navigator.language, optionsNumber).format(num));

/**
 * SetTimeOut
 */
const ingredients =['olives','spinach']
//normal comportamiento
setTimeout(() => {
  console.log("Despues de 3 segundos, me ejecuto");
}, 3000);

//Pasando parametros a la función

const pizaTimer = setTimeout((ing1, ing2) => {
  console.log(`Here is your Pizza with ${ing1} and ${ing2}`)
}, 4000, ...ingredients);

//limpiar el intervalo
if(ingredients.includes('spinach')) clearTimeout(pizaTimer)



/**
 * Set Interval
 */

let nowo = ''
let seconds = 0
const intervalClock = setInterval(() => {
  nowo = new Date();
  let hour = nowo.getMinutes();
  let minutes = nowo.getHours();
  seconds = nowo.getSeconds()

  // console.log(`${hour}:${minutes}:${seconds}`)
}, 1000);

if(seconds == 59) clearInterval(intervalClock)
