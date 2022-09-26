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

// labelDate.textContent =  moment().toNow()._d;
labelDate.textContent = "TODO"
const displayMovement = function(movements, sort = false){

  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice("").sort((a,b) => a - b) : movements.slice("").sort((a,b) => b - a);

  movs.forEach((mov, i) => {
    

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

/**SUM TOTAL ACCOUNT */
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
}

/************************************ */


/***Summary */

const calcDisplaSummary =  function(acc){

  const incomes = acc.movements.filter(mov => mov > 0)
                          .reduce((acc, curr) => acc  + curr, 0);
  const outcomes =  acc.movements.filter(mov => mov < 0)
                            .reduce((acc, curr) => acc  + curr, 0);
  
  const interest = acc.movements.filter(mov => mov > 0)
  .map(deposit => deposit * (acc.interestRate/100))
  .filter((acc, curr, i) =>
  { 
    return acc >= 1
  })
  .reduce((acc, curr) => acc + curr);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${interest}€`
}

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
createUserNames(accounts)

const updateUi = function(acc){
   
    //display movements
    displayMovement(acc.movements)
    
    //display balance
    calcDisplayBalance(acc)
    
    //display summary
    calcDisplaSummary(acc)
  
}

// Event handler
let currentAccount;
// console.log(accounts)
btnLogin.addEventListener('click', function(e){
  // prevent form from submitting
  e.preventDefault()
  //como mejorar esta validacion de contraseña ? todo:
  //hacer funcion para las validaciones
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value) && toString(currentAccount).split("").length === toString(inputLoginPin.value).split("").length){
    
    //display UI and message
    labelWelcome.textContent =`Welcome back ${currentAccount.owner.split(' ')[0]}`; 
    //clear the input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    containerApp.style.opacity = 100;
    inputLoginPin.blur();

    updateUi(currentAccount)
  }
})


btnTransfer.addEventListener('click',  function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  //convertir esta busqueda en eu una lista desplegable
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  console.log(receiverAcc, amount);
  console.log(currentAccount.balance)

  if (
      amount > 0 && 
      amount <= currentAccount.balance && 
      receiverAcc && 
      receiverAcc != currentAccount?.username
    ){
    console.log('Transfer valid')

    inputTransferAmount.value = inputTransferTo.value = "";

    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUi(currentAccount)

  }

});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(move => move >= (amount * 0.1))){
    // add movement
    currentAccount.movements.push(amount);
    
    // update to Ui
    updateUi(currentAccount);
  }
})


btnClose.addEventListener('click', function(e){
  e.preventDefault();

  console.log('Delete');

  if(inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin){
      const index =  accounts.findIndex(acc => acc.username === currentAccount.username)
      console.log(index)
      //Delete account
      accounts.splice(index, 1);
      
      //Hide Ui
      containerApp.style.opacity = 0;

      console.log('Deleted!')
    }
    inputCloseUsername.value = inputClosePin.value = "";
    labelWelcome.textContent = "Log in to get started"

});

let sorted = false;

btnSort.addEventListener('click', function(e) {
  e.preventDefault();

  console.log('SORT')
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
})






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

// console.log(...movements)

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
                                   .reduce((acc, curr) => acc + curr, 0)

// console.log(totalDepositedUSD.toFixed(2))


/**
 * FIND METHOD
 * return to first thing that matches the condition
 */

const firstWithdrawal = movements.find(mov => mov < 0)

let accountInUse = "" //accounts.find(acc => acc.owner === "Jessica Davis")

/**
 * with for of method
 */

for(let acc of accounts){
    if (acc.owner === "Jessica Davis"){
      accountInUse = acc
    }
}

// console.log(movements)
/**
 * SOME METHOD
 */

//si alguno de los elementos cumple con la condicion dada
const anyDeposits = movements.some(mov => mov > 500)
// console.log(anyDeposits)


/**
 * EVERY METHOD
 */

//si todos los elementos cumplen con la condicion
const allDeposits = movements.every(mov => mov >=100);
// console.log(allDeposits)

//separate callback

const deposit = mov => mov >= 0;

// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))

/**
 * flat and flatmap method
 */

const arrio = [[1,2,3],[4,5,6],7,8];
// console.log(arrio.flat());

const arrioDeep = [[[1,2],3],[4,[5,6]],7,8];
// console.log(arrioDeep.flat(2))

const overalBalanace = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
// console.log(overalBalanace)

//flatMap solo llega al primer anidamiento, si es necesario ir mas profundo lo mejor es usar flat
const overalBalanace2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
// console.log(overalBalanace2)

/**
 * SORT METHOD
 * 
 */

//ESTE METODO MUTA EL ARRAY ORIGINAL
const owners = ['Jonas', 'Zack', 'Anthony', 'Martha'];
// console.log(owners.sort())
// console.log(owners)

//este metodo ordena por strings, asi funciona de manera predeterminada

//return < 0 A, B
//return > 0 B, A
// console.log(movements)

//Ascending
movements.sort((a, b) => {
  // console.log(a, b)
  if(a > b) return 1;
  if(b > a) return -1;
});
// console.log(movements)

//Descending
movements.sort((a, b) => {
  // console.log(a, b)
  if(a > b) return -1;
  if(b > a) return 1;
});
// console.log(movements)

/**
 * FILL METHOD
 */

/**
 * Cambia todos los elementos de un arreglo por un valor estatico, desde el índice start, por defecto 0
 * hasta el índice end array.length y retorna el arreglo modificado
 */ 

const arri = [1,2,3,4,5,6,7,8,9,0]
// console.log(new Array(7))
//puedo declarar un array vacio con []
//y tambien con el método new Array() => pasandole el length que necesitaré
//tiene múltiples ventajas crear un array con un length especifico 
const test =  new Array(8)
// console.log(test)
test.fill(1,2,3) 
//fill recibe 3 parametros, el primero es con lo que quiero que se llene
//el segundo y el tercero son los espacios donde quiero que lo haga, parecido a un slice 
//desde - hasta
// console.log(`fill con parametros: ${test}`, test);
test.fill(1)
// console.log(`fill sin parametros: ${test}`, test)

//Array.from
/**
 * permite crear un array con un legth especifico y adicionalmente
 * permite usar una funcion donde podemos especificar que datos queremos
 * dentro del array
*/

const x =  Array.from({length: 7}, () => 1);
// console.log(x)

const y = Array.from({length: 7}, (_,i) => i + 1) 
// al usar el _ como valor en una funcion indicamos que no estamos usando ese parametro dentro de la funcion
// el _ es el current value, pero como es un array vacío no hay manera de usarlo
// si lo retornamos es un undefined, si lo usamos aritmeticamente será un Nan 
// console.log(y);

const convertToNumber  = function(elemt){
  return Number(elemt.textContent.replace('€',''));
  /**
   * esto me permite infinitas posibilidades de trabajar 
   * con los valores obtenidos de una interfaz
   * directamente
   */
}


labelBalance.addEventListener('click', function(){
  //donde ya ha cargado en la interfaz los movimientos, es algo como el this
  
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), 
    elem => convertToNumber(elem)//elem => Number(elem.textContent.replace('€',''))
  );
  // const cleanMovements =  movementsUI.map((elem) => Number(elem.textContent.replace('€','')))
      //este segundo paso puedo ahorrarmelo llamando directamente a una funcion
  // console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll('.movements__value')]
  //spread operator
  // console.log(movementsUI2);
})

/**
 * ARRAY METHODS PRACTICE
 */

const bankDepositdSum =  accounts
.flatMap((acc) => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, curr) => sum + curr,0);

console.log(bankDepositdSum);

//2.
const numDepositd1000 = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov >= 1000).length
console.log(numDepositd1000);

const numDepositd1000_2 = accounts
.flatMap(acc => acc.movements)
.reduce((count, curr) => curr >=1000 ? ++count : count, 0)
console.log(numDepositd1000_2);

let a = 10
console.log(a++);
// al usarlo de esta manera, actualiza la variable pero no la imprima 
// es como un updateBefore
console.log(++a);
//en cambio de esta manera es de inmediato

//3.

const {deposits, withdraw} = accounts
.flatMap(acc => acc.movements)
.reduce((sums,curr)=>{
  // curr >=0 ? sums.deposits += curr : sums.withdraw += curr;
  // return sums;
  sums[curr >= 0 ? 'deposits' : 'withdraw'] += curr;
  return sums
},{deposits:0, withdraw:0})

console.log(deposits, withdraw);

//4.

const titleCase = function(title){

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'is', 'and'];
  const titleCase = title.toLowerCase().split(" ")
  .map(word => !exceptions.includes(word) ? word[0].toUpperCase() + word.slice(1) : word ).join(" ");
  return titleCase
}
console.log(titleCase("this is a nice title"))
console.log(titleCase("This is a LONG title but not too long"))
console.log(titleCase("and here is another title with an example"))

