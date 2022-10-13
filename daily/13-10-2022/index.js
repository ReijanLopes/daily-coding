const arrayNumber = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // não pode ser feito com esse tipo de function () => {}
  const newArray = [];
  this.map((item) => {
    if (callback(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

const new_s = arrayNumber.myFilter((item) => {
  return item % 2 === 1;
});

const dataStatus = [
  "NEW",
  "ACCEPTED",
  "COMPLETE",
  "CANCELLED",
  "NEW",
  "NEW",
  "NEW",
  "ACCEPTED",
  "ACCEPTED",
  "ACCEPTED",
  "CANCELLED",
  "CANCELLED",
  "CANCELLED",
  "CANCELLED",
  "CANCELLED",
  "CANCELLED",
];
const statusLength = [];
const baseStatus = ["NEW", "ACCEPTED", "INCOMPLETE", "COMPLETE", "CANCELLED"];
const statusFilter = baseStatus.map((item) => {
  const statusFilter = dataStatus.filter((status) => {
    return status === item;
  });
  statusLength.push({ name: item, total: statusFilter.length });
});
const sorted = (a, b) => {
  return a.total > b.total ? -1 : a.total < b.total ? 1 : 0;
};
const format = statusLength.sort(sorted);
