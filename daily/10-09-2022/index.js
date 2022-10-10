const dates = [
  { date: "2022-10-10" },
  { date: "2022-10-09" },
  { date: "2022-10-08" },
  { date: "2022-10-07" },
  { date: "2022-10-06" },
  { date: "2022-10-05" },
  { date: "2022-10-04" },
];

const range = { start: "2022-10-04", end: "2022-10-10" };

const createListDates = ({ start, end }) => {
  const distance = (new Date(end) - new Date(start)) / (1000 * 3600 * 24);

  const maxLength = 12;
  const length = distance >= maxLength ? maxLength : distance;
  const sizeRange =
    distance >= maxLength
      ? (distance * 24) / maxLength
      : (distance * 24) / distance;

  const startDate = new Date(end);
  const endDate = new Date(end);
  console.log(distance * 24);

  const separetedRanges = [];
  for (let i = 0; i < length; i++) {
    const test = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);
    startDate.setHours(startDate.getHours() - sizeRange);
    if (i != 0) {
      endDate.setHours(endDate.getHours() - sizeRange);
    }
    console.log(startDate, endDate);

    const filtered = dates.filter((item) => {
      const date = new Date(item.date).getTime();
      return (
        date > new Date(startDate).getTime() &&
        date <= new Date(endDate).getTime()
      );
    });

    console.log("foi");
    separetedRanges.push({ ...filtered, date: new Date(startDate) });
  }
  return separetedRanges;
};
console.log("createList:", createListDates(range));
