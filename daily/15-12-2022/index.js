function seeingDouble(deck) {
  return deck.map((item) => item * 2);
}

function threeOfEachThree(deck) {
  const tree = [3, 3, 3];
  const res = [];
  deck.map((item) => {
    // or concat
    item === 3 ? res.push(...tree) : res.push(item);
  });
  return res;
}

function middleTwo(deck) {
  return [deck[4], deck[5]];
}

function twoIsSpecial(deck) {
  return deck.filter((item) => item == 2);
}

function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

function reorder(deck) {
  return deck.reverse();
}

function sandwichTrick(deck) {
  const mid = deck.length / 2;
  const last = deck.pop();
  const first = deck.shift();

  deck.splice(mid, 0, last, first);
  return deck;
}
