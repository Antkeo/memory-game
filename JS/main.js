console.log("Up and running!");

//cardArray
var cards = ['queenOfDiamond', 'queenOfHeart', 'kingOfHeart', 'kingOfDiamond'];
var cardsInPlay = [];
//variables
var cardOne = 'queenOfDiamond';
var cardTwo = 'kingOfHeart';
//add cards to array
cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[1])
//when you find a match
checkForMatch = function() {
if (cardsInPlay.length === 2) {
  console.log('you have selected two cards');
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('you found a match!!')
    console.log('you found a match');
  } else {
    alert('sorry try again')
  }
}
};
//user flipped cards
console.log("User flipped" + ' ' + cards[0]);
console.log("User flipped" + ' ' + cards[1]);
//flip card
var flipCard = function() {

}
