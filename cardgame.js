let cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
const cardsDeck = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let aliceScore = 0;
let bobScore = 0;

let alice = [];
let bob = [];
let newCards = [];

function winner(dealCards) {
  for (var i = 0; i < 3; i++) {
  if (cardsDeck.indexOf(alice[i]) > cardsDeck.indexOf(bob[i])) {
    aliceScore += 1;
 } else if (cardsDeck.indexOf(alice[i]) < cardsDeck.indexOf(bob[i])) {
    bobScore += 1;
 } }
  console.log("Alice: " + alice)
  console.log("Bob: " + bob)
  if (aliceScore > bobScore) {
  console.log("Alice wins " + aliceScore + " to " + bobScore);
} else if (aliceScore < bobScore) {
  console.log("Bob wins " + bobScore + " to " + aliceScore); }
}

function remove(card) {
  for (var i = 0; i < cards.length; i++) {
    if (cards[i] != card) {
      newCards.push(cards[i])
    }
  }
  cards = newCards;
  newCards = [];
}

function dealCards() {
  for (var x = 0; x < 3; x++ ) {
    num = Math.floor(Math.random() * cards.length);
    var aliceCard = cards[num];
    alice.push(aliceCard);
    remove(aliceCard);
    num = Math.floor(Math.random() * cards.length);
    var bobCard = cards[num];
    bob.push(bobCard);
    remove(bobCard);
  }
}

// function deckAlice() {
//   for (var x = 0; x < 3; x++ ) {
//     num = Math.floor(Math.random() * cards.length);
//     var value = cards[num];
//     alice.push(value);
//   }
//   console.log(alice);
// }
//
// function deckBob() {
//   for (var x = 0; x < 3; x++ ) {
//     num = Math.floor(Math.random() * cards.length);
//     var value = cards[num];
//     bob.push(value);
//   }
//   console.log(bob);
// }

console.log(winner(dealCards()));


// deal alice
//   remove alice card from deck
// deal bob
//   remove bob card from deck
// deal alice
//   remove alice card from deck
// deal bob
//   remove bob card from deck
// deal alice
//   remove alice card from deck
// deal bob
//   remove bob card from deck
