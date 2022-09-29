const persons = [
  { name: "Jose1" },
  { name: "Jose2" },
  { name: "Jose3" },
  { name: "Jose4" },
  { name: "Jose5" },
  { name: "Jose6" },
  { name: "Jose7" },
  { name: "Jose8" },
  { name: "Jose9" },
];
const date = new Date();

const formatFill = (n) => {
  return n < 10 ? `0${n}` : n;
};

persons.map((item, index) => {
  const d = new Date(date.setUTCDate(date.getUTCDate() - index * 30));
  item.date = `${d.getFullYear()}/${formatFill(d.getMonth() + 1)}/${formatFill(
    d.getDate()
  )}`;
});

const orderingPerDate = (arr) => {
  const ordered = [];
  arr.map((item) => {
    const d = new Date(item.date);
    const month = d.toLocaleDateString("pt-br", {
      month: "long",
    });
    const year = d.getFullYear();

    if (!ordered[`year${year}`]) {
      ordered[`year${year}`] = [];
    }
    ordered[`year${year}`][month] = { item, month };
  });
  return ordered;
};

console.log(orderingPerDate(persons));
