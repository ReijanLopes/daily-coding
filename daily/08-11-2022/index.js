const colorsBox = [
  "#FF0000",
  "#FFF700",
  "#FF8F00",
  "#55FF00",
  "#008BFF",
  "#6C00FF",
  "#FB00FF",
  "#00FFDC",
];

const createList = () => {
  const res = [];
  for (let i = 0; i < 20; i++) {
    const array = Array.from({ length: 8 }).map(() => {
      const index = Math.floor(Math.random() * 8);
      const idRandom =
        Date.now().toString(36) +
        Math.floor(
          Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
        ).toString(36);

      return { color: colorsBox[index], id: idRandom };
    });
    res.unshift(array);
  }
  return res;
};

const list = createList();

const filtered = () => {
  let res;
  for (let i = 0; i < list.length; i++) {
    const obj = list[i];
    let indexColumn;

    const elem = obj.filter((item, index) => {
      if (item.id === list[0][7].id) {
        indexColumn = index;
        return item.id === list[0][7].id;
      }
    });

    return (res = { elem: elem, indexRow: i, indexColumn: indexColumn });
  }
};

filtered(); // get Location in row and column in summary a filter
