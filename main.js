const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

//user flipped queen
let cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("user flipped " + cardOne);

//user flipped king
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo)

//logic to see if two cards in play
if (cardsInPlay.length === 2) {
    if (cardOne === cardTwo) {
        alert("you found a match!");
    } else {
        alert("please try again");
    }
}