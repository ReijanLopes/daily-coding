const data = [
  { name: "Reijan", date: "Sun Sep 18 2022 08:48:59 GMT-0300 (Brasilia Standard Time)" },
  { name: "Douglas", date: "Sat Sep 17 2022 08:48:39 GMT-0300 (Brasilia Standard Time)" },
  { name: "Anabily", date: "Wed Sep 21 2022 08:48:23 GMT-0300 (Brasilia Standard Time)" },
  { name: "Fabiana", date: "Thu Sep 08 2022 08:49:20 GMT-0300 (Brasilia Standard Time)" },
  { name: "Marcos", date: "Thu Sep 08 2022 08:49:20 GMT-0300 (Brasilia Standard Time)" },
  { name: "Ruan", date: "Thu Sep 08 2022 08:49:20 GMT-0300 (Brasilia Standard Time)" },
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
        return {name:item.name ,date: formatDate(item.date)}
    })
    return dates
}