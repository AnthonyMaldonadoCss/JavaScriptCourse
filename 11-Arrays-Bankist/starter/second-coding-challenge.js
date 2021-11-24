'use strict';

/**
 * Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */

const calcAverageHumanAge = function (dogAge) {
     console.log(`Array original: ${dogAge}`)
    
     //MAP
    const humanAge = dogAge.map((acc, cur) => {
        
        // console.log(`iterator: ${acc} position ${cur}`)

        if(acc <= 2){
            return (2 * acc)
        } else if(acc > 2){
            return 16 + (acc * 4)
        }

    },dogAge[0])
    
    console.log(`Human Age: ${humanAge}`)

    //FILTER
    const humanAgeFilter = humanAge.filter((i) => i > 18)

    console.log(`Filter > 18: ${humanAgeFilter}`)

    //REDUCE
    const humanAgeReduce = humanAgeFilter.reduce((acc, cur) => {
        // console.log(humanAgeFilter.length)
        
        
        // console.log(`iterator ${acc} position ${cur}`)
        
        let acumulador = (acc + cur)
        return acumulador     

    },humanAgeFilter[0])

    return `Promedio: ${Math.round( humanAgeReduce / humanAgeFilter.length)}`
    
    // console.log(humanAgeReduce)
    
}

console.log( calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))

// MAP
// si el perro tiene <= 2 años : humanAge = 2 * dogAge
// si el perro es > 2 años : humanAge = 16 + dogAge * 4
///////////

// FILTER
// excluir a todos los perros que tengan < 18 años de edad humana
//////////

//REDUCE
// calcular el promedio de edad humanada de todos los perros
//////////

//ejecutar la funcion con los dos test data