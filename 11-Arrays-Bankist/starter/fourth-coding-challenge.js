'use strict;'
/*
Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects �)

Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/

const dogs = [
    
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    { weight: 14, curFood: 276, owners: ['Anthony', 'Heczaid'] },
];
//1.
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

console.log("data dogs")
console.log(dogs);
console.log("====");

dogs.map((dog,i) => dog["recommendedFood"] =  Math.round((dog.weight ** 0.75) * 28))
console.log(dogs);

/**
 * 2. Find Sarah's dog and log to the console whether it's eating too much or too
    little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
    the owners array, and so this one is a bit tricky (on purpose) �
    3. Create an array containing all owners of dogs who eat too much
    ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
    ('ownersEatTooLittle').
 */

let OwnerDog = 'Sarah'
let ownersEatTooMuch = [],ownersEatTooLittle = []

dogs.forEach((dog,i) =>{
    const isToMuch =  (dog.recommendedFood > dog.curFood)
    if (isToMuch) ownersEatTooMuch.push(dog.owners[0])
    else ownersEatTooLittle.push(dog.owners[0]) 
    
    // (isToMuch) ? ownersEatTooMuch.push(dog.owners[0]) : ownersEatTooLittle.push(dog.owners[0])
    //al parecer el ternario se lee primero que la creacion de la constante
    
    if(dog.owners.includes(OwnerDog)){
        (isToMuch) ? console.log("The dog of Sarah is eating to much") : console.log("The dog of Sarah is eating to minus")
    }
})


console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

/*
    4. Log a string to the console for each array created in 3., like this: "Matilda and
    Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
    too little!"
*/
let message = "dogs eat too"
let ownersEatTooLittleMessage = `${ownersEatTooLittle.join(" and ")} ${message} little!`
let ownersEatTooMuchMessage = `${ownersEatTooMuch.join(" and ")} ${message} much!`

console.log(`${ownersEatTooLittleMessage}`);
console.log(`${ownersEatTooMuchMessage}`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

let dogEatingOkayAmount = []
dogs.map((dog,i) => {
    if (dog.curFood == dog.recommendedFood){
        console.log("is any dog eating exactly the amount of food");
        console.log(dog.curFood == dog.recommendedFood ? {owners :dog.owners[0], 'true': true} : {owners :dog.owners[0], 'true': false});

    }else if(dog.curFood < dog.recommendedFood){
        dogEatingOkayAmount.push(dog)
        console.log("is any dog eating an okay amount of food");
        console.log(dog.curFood < dog.recommendedFood ? {owners : dog.owners[0], 'true': true} : {owners :dog.owners[0], 'true': false});
    }
})

// 7. Create an array containing the dogs that are eating an okay amount of food (try
    // to reuse the condition used in 6.)

console.log(dogEatingOkayAmount);