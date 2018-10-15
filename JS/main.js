console.log("Up and running!");
//board

//cardArray
var cards = [
  {
    rank: "queen",
    suit: "diamond",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "queen",
    suit: "heart",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamond",
    cardImage: "images/king-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "heart",
    cardImage: "images/king-of-hearts.png"
  }
];

var cardsInPlay = [];


//function
var checkForMatch = function() {
  console.log('cardsInPlay0 is ', cardsInPlay[0])
  console.log('cardsInPlay1 is ', cardsInPlay[1])

  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCards);
    document.getElementById('game-board').appendChild(cardElement);
    }
}

var flipCards = function() {
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();

  }
  console.log("User flipped" + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);


}
createBoard();







  //console.log('you have selected two cards');
  //if (cardsInPlay[0] === cardsInPlay[1]) {
    //alert('you found a match!!')
    //console.log('you found a match');
  //} else {
    //alert('sorry try again');
    //console.log('Sorry try again');
 //}
//}
//};

//flip card
//var flipCard = function() {
  //var cardId =
  //console.log("User flipped " +cards[cardsId]);
  //checkForMAtch();
  //cardsInPlay.push(cards[cardsId].rank);
  //cardsInPlay.push(cards[cardsId].suit);
//};
