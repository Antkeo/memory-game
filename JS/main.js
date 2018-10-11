console.log("Up and running!");

//cardArray
var cards = ['queenOfDiamond', 'queenOfHeart', 'kingOfHeart', 'kingOfDiamond'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1]
//add cards to array
cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[1]);

//user flipped cards
console.log("User flipped" + ' ' + cards[0]);
console.log("User flipped" + ' ' + cards[1]);

//if statements
if (cardsInPlay.length === 2) {
  (cardsInPlay[0] === cardsInPlay[1]);
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
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
