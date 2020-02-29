const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

//function to see if cards match
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Please try again");
    }
}
//function to flip the cards
function flipCard(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);
checkForMatch();


    

