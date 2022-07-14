const array1 = [1, 2, 3, 4, 5];

const initialValue = 0;

const tranformeOneValue = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(tranformeOneValue); // 15

const array2 = [
  { month: "Janeiro", nameStudent: "Reijan", absence: 2 },
  { month: "Fevereiro", nameStudent: "Reijan", absence: 6 },
  { month: "Março", nameStudent: "Reijan", absence: 8 },
  { month: "Abril", nameStudent: "Reijan", absence: 10 },
  { month: "Maio", nameStudent: "Reijan", absence: 4 },
  { month: "Junho", nameStudent: "Reijan", absence: 2 },
];

const totalAbsence = array2.reduce((preval, elem) => preval + elem.absence, 0);

console.log(totalAbsence); // 32
