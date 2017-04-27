const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let aliceScore = 0;
let bobScore = 0;

let alice = [];
let bob = [];

function winner(deckAlice, deckBob) {
  for (var i = 0; i < 3; i++) {
  if (cards.indexOf(alice[i]) > cards.indexOf(bob[i])) {
    aliceScore += 1;
 } else {
    bobScore += 1;
 }
} if (aliceScore > bobScore) {
  console.log("Alice wins " + aliceScore + " to " + bobScore);
} else if (aliceScore < bobScore) {
  console.log("Bob wins " + bobScore + " to " + aliceScore); }
}

function deckAlice() {
  for (var x = 0; x < 3; x++ ) {
    num = Math.floor(Math.random() * 13);
    var value = cards[num];
    alice.push(value);
  }
  console.log(alice);
}

function deckBob() {
  for (var x = 0; x < 3; x++ ) {
    num = Math.floor(Math.random() * 13);
    var value = cards[num];
    bob.push(value);
  }
  console.log(bob);
}

console.log(winner(deckAlice(), deckBob()));
