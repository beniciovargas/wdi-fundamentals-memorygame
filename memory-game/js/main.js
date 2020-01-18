const cards =[
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}, 
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}, 
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},  
];


cardsInPlay=[];

const createBoard = function(){
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

const checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
				alert("You found a match!");
				resetButton();
			} else{
				alert ("Sorry, try again.");
				resetButton();
			};
};

const resetButton = function(){
	let button = document.createElement('button');
	button.innerHTML = "play again";
	button.addEventListener('click', clearBoard);
	document.getElementById('game-board').appendChild(button);
};

const clearBoard = function (){
	window.location.reload(true);
};

const flipCard = function(){
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};

createBoard();
