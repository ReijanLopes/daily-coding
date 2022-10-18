const employees = [
  { tasks: 1, name: "apple1", jose: "reijan" },
  { tasks: 1, name: "apple", jose: "reijan" },
  { tasks: 3, name: "apple", jose: "reijan" },
  { tasks: 1, name: "apple1", jose: "reijan" },
  { tasks: 1, name: "apple3", jose: "reijan" },
  { tasks: 1, name: "apple2", jose: "reijan" },
];

const employeesAndTheirTasks = new Map();
employees.map((employee) => {
  if (!employeesAndTheirTasks.has(employee.name)) {
    employeesAndTheirTasks.set(
      employee.name,
      employees
        .filter((item) => {
          return item.name == employee.name;
        })
        .reduce(
          (acc, item) => {
            acc.totalTasks += item.tasks ?? 0;
            return acc;
          },
          { totalTasks: 0 }
        )
    );
  }
});
[...employeesAndTheirTasks].map((item) => {
  console.log(item[1].totalTasks);
});

console.log(
  [...employeesAndTheirTasks]
    .sort((a, b) =>
      a[1].totalTasks < b[1].totalTasks
        ? 1
        : a[1].totalTasks > b[1].totalTasks
        ? -1
        : 0
    )
    .slice(0, 3)
);
