/**
 * Functios calling other fuctions
 */

function cutApplesPieces(cut) {
    return cut * 5;
}

function squeezeOranges(squeeze) {
    const juice = 2;
    return squeeze * juice;
}

function cutGrappesPieces(cut) {
    return cut * 2;
}

function cutUpPinneaples(cutUp) {

    if (cutUp > 5) {
        cutUp * 3;
        return cutUp;
    } else {
        cutUp * 2;
        return cutUp;
    }
}

function fruitProcessor(apples, oranges, grappes, pinneaples) {

    if (apples <= 5) {
        console.log(`it is not possible it has to be greater than ${apples}`);
    } else {
        const applePieces = cutApplesPieces(apples);
        const orangeSqueeze = squeezeOranges(oranges);
        const grappesPieces = cutGrappesPieces(grappes);
        const pinneaplesCutUp = cutUpPinneaples(pinneaples);

        // const fruits = [orangeSqueeze, applePieces, grappesPieces, pinneaplesCutUp]
        const messageFruits = `Salad fruits with ${applePieces}, ${orangeSqueeze}, ${grappesPieces}, ${pinneaplesCutUp}`
        return messageFruits
    }

    // switch (apples) {
    //     case 5:
    //         console.log(`it is not possible it has to be greater than ${apples}`);
    //         break;

    //     default:
    //         const applePieces = cutApplesPieces(apples);
    //         const orangeSqueeze = squeezeOranges(oranges);
    //         const grappesPieces = cutGrappesPieces(grappes);
    //         const pinneaplesCutUp = cutUpPinneaples(pinneaples);

    //         // const fruits = [orangeSqueeze, applePieces, grappesPieces, pinneaplesCutUp]
    //         const messageFruits = `Salad fruits with ${applePieces}, ${orangeSqueeze}, ${grappesPieces}, ${pinneaplesCutUp}`
    //         return messageFruits
    //         break;
    // }



}
const saladFruit = fruitProcessor(6, 10, 2, 1);

console.log(saladFruit);