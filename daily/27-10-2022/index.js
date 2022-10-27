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
