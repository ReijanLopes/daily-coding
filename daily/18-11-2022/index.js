const array = [
  { name: "cat", age: 3 },
  { name: "dog", age: 4 },
  { name: "elephant", age: 3 },
  { name: "bee", age: 3 },
  { name: "ant", age: 3 },
];

const array2 = [
  "a",
  "A",
  "b",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "b",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

array.sort((a, b) => (a.name > b.name ? 1 : a == b ? 0 : -1));
//[
//   { name: 'ant', age: 3 },
//   { name: 'bee', age: 3 },
//   { name: 'cat', age: 3 },
//   { name: 'dog', age: 4 },
//   { name: 'elephant', age: 3 }
// ]

array2.sort((a, b) => (a > b ? 1 : a == b ? 0 : -1)); // 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'a', 'b'

// not use in obj
array2.sort((a, b) => a.localeCompare(b)); // 'a', 'A', 'b', 'b', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
