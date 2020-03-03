const cards = [
    {
        rank: 'queen', 
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    }, 
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    }, 
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    }, 
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];
const cardsInPlay = [];


//function that creates playing board
function createBoard(){
    for (let i = 0; i < cards.length; i++ ) {
        const cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    };
};
//function to flip the cards
function flipCard() {
    const cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length > 1) {
        checkForMatch();
    }
};
//function to see if cards match
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Please try again");
    }
};


//function to reload page using reset button
function resetBoard() {
    location.reload(); 
};

document.getElementById('reset').addEventListener('click', resetBoard);


//create page
createBoard();
