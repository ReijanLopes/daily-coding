// type [value, value]
const arr1 = [
  "diorite",
  "andesite",
  "grass",
  "dirt",
  "pink wool",
  "dead shrub",
];
const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

const diffArray = (first, second) => {
  const res = [];

  const Function = (first, second) => {
    first.map((item) => {
      if (second.indexOf(item) === -1) {
        res.push(item);
      }
    });
  };

  Function(first, second);
  Function(second, first);

  console.log(res);
};

diffArray(arr1, arr2);

// type[{name: string, total: number}]

const arrKeys1 = [
  { name: "Reijan", total: 1 },
  { name: "Dougras", total: 12 },
  { name: "Reijan", total: 1 },
  { name: "Jose", total: 13 },
  { name: "Jose", total: 14 },
  { name: "Felipe", total: 1 },
  { name: "Reijan", total: 5 },
  { name: "Dougras", total: 12 },
  { name: "Jose", total: 13 },
  { name: "Felipe", total: 1 },
  { name: "Dougras", total: 12 },
];

const whatIsInAName = (collections, source) => {
  const arr = [];

  collections.map((collection) => {
    let index = 0;
    for (let key in source) {
      if (collection[key] === source[key]) {
        index++;
      }
      if (index === Object.keys(source).length) {
        arr.push(collection);
      }
    }
  });
  return arr;
};

console.log(whatIsInAName(arrKeys1, { name: "Reijan" }));
