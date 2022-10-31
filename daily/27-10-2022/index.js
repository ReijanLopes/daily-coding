// testing assumptions
const data = [
  { name: "Dogras" },
  { name: "Anabilis" },
  { name: "KingJan" },
  { name: "Jose" },
  { name: "Antonio" },
];

const dataRegion = [
  ["North", "South", [["South"]]],
  ["East", "West"],
];

const concatenated = data.concat(dataRegion);
const flattened = concatenated.flat();

const flattenedMapConcat = concatenated.flatMap((num) => num.name || num); //: string[]
const flattenedMap = dataRegion.flatMap((num) => {
  return Array.isArray(num) ? num.flat().flat() : num;
});

const num = [12, 5, 8, 1, 4];
const greaterThanTenSome = num.some((item) => item >= 10);
// brings the answer to see if an element meets the requirement, return boolean
const greaterThanTenEvery = num.every((item) => item >= 10);
// brings the answer to see if an element meets the requirement, return Truthy (true / false, 0, "", null, undefined, e NaN)

// testing in function

const dataFunction = [1, [2], [3, [[4]]]];

const steamrollArray1 = (arr) => {
  const flat = [].concat(...arr); // Deep clone
  return {
    dataSteamroll: flat.some(Array.isArray) ? steamrollArray1(flat) : flat,
  };
};

// or

const steamrollArray2 = (arr) => {
  while (isAnArray(arr)) {
    arr = arr.flat();
  }
  return arr;
};

const isAnArray = (arr) => {
  return arr.some((item) => Array.isArray(item));
};
// I like the last function(steamrollArray2) because of the division of tasks
steamrollArray1(dataFunction);
console.log(steamrollArray2(dataFunction));
