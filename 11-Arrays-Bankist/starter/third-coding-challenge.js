'use strict';

/**
 * Coding Challenge #3
    Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
    as an arrow function, and using chaining!
    Test data:
    § Data 1: [5, 2, 4, 1, 15, 8, 3]
    § Data 2: [16, 6, 10, 5, 6, 1, 4]
    GOOD LUCK �
 */

const calcAverageHumanAge = function (dogAge) {
    console.log(`Array original: ${dogAge}`)
   
    const minus = 2
    const mayor = 4
    const average =  dogAge.map(i => (i <= 2) ? minus * i : 16 + (i * mayor))
                            .filter(i => i >= 18)
                            .reduce((acc,curr) => acc + curr, dogAge[0])
   
    // const average = dogAge.map((acc) => {
    //    if(acc <= 2){
        //    return (2 * acc)
    //    } else if(acc > 2){
        //    return 16 + (acc * 4)
    //    }
//    })
//    .filter((i) => i > 18)
//    .reduce((acc, curr) => acc + curr, dogAge[0])

   return `Promedio: ${Math.round( average / dogAge.length)}`
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))