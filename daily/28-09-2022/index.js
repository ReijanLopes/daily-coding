const data = [
  { name: "Reijan1" },
  { name: "Reijan2" },
  { name: "Reijan3" },
  { name: "Reijan4" },
];

const createDate = () => {
  data.map((item, index) => {
    const date = new Date(`2022/09/0${index + 1}`);
    item.date = date;
  });
};

createDate();

const button = document.querySelector(".button");

const filterPerDate = () => {
  const start = document.querySelector(".startDate").value;
  const end = document.querySelector(".endDate").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  const filter = data.filter((item) => {
    let date = new Date(item.date);
    return date >= startDate && date <= endDate;
  });
  console.log(filter);
};

button.addEventListener("click", filterPerDate);
