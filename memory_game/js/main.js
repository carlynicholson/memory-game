const cards = [{
	rank: 'queen', suit: 'hearts', cardImage: 'images/queen-of-hearts.png' },
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
}, 
{rank: 'king', suit: 'hearts', cardImage: 'images/king-of-hearts.png'},
{rank: 'king', suit: 'diamonds', cardImage: 'images/king-of-diamonds.png'}
]
let cardsInPlay= []
function flipCard() {
	const cardId = this.getAttribute('data-id')
//console.log("Up and running!");
console.log("User flipped" + cards[cardId].rank) 
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)
cardsInPlay.push(cards[cardId])
}

function checkForMatch () {
//step 11, look at this one later
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement("img")
		cardElement.setAttribute("src", cards[i].cardImage)
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement)
    }
}

createBoard()
