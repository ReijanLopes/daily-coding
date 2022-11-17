const array = Array.from({ length: 20 }).map(() => {
  const index = Math.floor(Math.random() * 8);
  const idRandom =
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36);

  return { color: index, id: idRandom };
});

const res = [];
const filtered = array.filter((item, index) => {
  if (item.color === array[0].color) {
    console.log(item.color);
    res.push(index);
    return item;
  }
}); // array the elementsColors

res.map((item) => {
  console.log(res);
  array.splice(item, 1);
});

//or

array.splice(
  array.findIndex((v) => v.color === array[0].color),
  1
); // single element color
