const array = [
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
  { id: 3, color: "blue" },
  { id: 4, color: "blue" },
];

const deleteElem = (res, arr) => {
  res.map((item) => {
    const index = arr.findIndex((object) => object.id === item.id);
    arr.splice(index, 1);
  });
};

const filter = (color, arr) => {
  const res = arr.filter((item) => item.color == color);
  deleteElem(res, arr);
  return res;
};

const test = array.slice();

const check = () => {
  if (filter("blue", test).length >= 3) {
    filter("blue", array);
  }
  console.log(array);
};
check();
