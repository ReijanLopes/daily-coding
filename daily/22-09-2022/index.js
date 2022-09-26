const data = [
  {
    name: "Reijan",
    date: new Date("11-19-2015"),
  },
  {
    name: "Douglas",
    date: new Date("12-01-2015"),
  },
  {
    name: "Anabily",
    date: new Date("11-02-2015"),
  },
  {
    name: "Fabiana",
    date: new Date("11-20-2015"),
  },
  {
    name: "Marcos",
    date: new Date("11-15-2015"),
  },
  {
    name: "Ruan",
    date: new Date("11-10-2015"),
  },
];

const startTime = document.querySelector(".startTime");
const endTime = document.querySelector(".endTime");

const date = new Date();

const formatDate = (_date) => {
  const date = new Date(_date);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const leadingzero = (n) => (n < 10 ? "0" + n : n);

  return `${yyyy}-${leadingzero(mm)}-${leadingzero(dd)}`;
};

endTime.value = formatDate(date);
startTime.value = formatDate(date.setDate(date.getDate() - 7));

const formatData = () => {
  const dates = data.map((item) => {
    return { name: item.name, date: formatDate(item.date) };
  });
  return dates;
};

const sortByDate = (a, b) => {
  if (a.date < b.date && a.date > b.date) return 1;
  if (a.date > b.date) return -1;
  return 0;
};

console.log(data.sort(sortByDate));
