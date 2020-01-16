let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You have found a match!")
	}else{
		alert ("Sorry, try again.")
	};
};

function flipCard(cardId){
	console.log ("User flipped "+ cards[cardId])
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2){
		checkForMatch();
	
	}else{
		//do something else
	};
};

flipCard();