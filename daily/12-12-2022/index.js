const isEven = (item) => item % 2 === 0;
const isOdd = (item) => item % 2 !== 0;

function getCardPosition(stack, card) {
  return stack.indexOf(card);
}
function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}
function isEachCardEven(stack) {
  return stack.every(isEven);
}
function doesStackIncludeOddCard(stack) {
  return stack.some(isOdd);
}
function getFirstOddCard(stack) {
  return stack.find(isOdd);
}
function getFirstEvenCardPosition(stack) {
  return stack.findIndex(isEven);
}

getCardPosition([9, 7, 3, 2], 2); // 3
doesStackIncludeCard([2, 3, 4, 5], 3); // true
isEachCardEven([2, 4, 6, 7]); // false
doesStackIncludeOddCard([3, 2, 6, 4, 8]); // true
getFirstOddCard([4, 2, 8, 7, 9]); // 7
getFirstEvenCardPosition([5, 2, 3, 1]); // 1
