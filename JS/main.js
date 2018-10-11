console.log("Up and running!");

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
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var flipCards = function(cardId) {
  if (cardsInPlay.length === 2) {
    (cardsInPlay[0] === cardsInPlay[1]);
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  console.log("User flipped" + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  checkForMatch();

}
flipCards(0);
flipCards(2);







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
