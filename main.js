console.log("Up and running!");

//cardArray
var cards = [

   {
       rank: "queen",
       suit: "hearts",
       cardImage: "./All memory_game files/images/queen-of-hearts.png" ,
   },
   {
      rank: "king",
      suit: "diamonds",
      cardImage: "./All memory_game files/images/king-of-diamonds.png" ,
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "./All memory_game files/images/king-of-hearts.png" ,
   },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "./All memory_game files/images/queen-of-diamonds.png" ,
   },
];

var cardsInPlay = [];

//alerts
checkForMatch = function() {
   if (cardsInPlay.length === 2) {
       console.log("you have selected two cards");
       if (cardsInPlay[0] === cardsInPlay[1]) {
         console.log("You found a match!");
      } else {
         alert("Sorry, try again.");
      }
   }
};

//flipCard
var flipCard = function() {
   var cardId = this.getAttribute("data-id");
   cardsInPlay.push(cards[cardId].rank);
   this.setAttribute("src",cards[cardId].cardImage);
   console.log("User flipped "+cards[cardId].rank);
   checkForMatch();
};

//createBoard
function createBoard() {
   const cardTable = document.getElementById('game-board');
   for (var i = 0; i < cards.length; i++) {
   var cardElement = document.createElement('img');
     cardElement.setAttribute('src', './All memory_game files/images/back.png');
     cardElement.setAttribute('data-id', i);
     cardElement.addEventListener('click', flipCard);
     cardTable.appendChild(cardElement);
   }
 };

//Create Board Function
createBoard();




