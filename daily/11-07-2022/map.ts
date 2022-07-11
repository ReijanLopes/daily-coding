interface Tmap {
  name: string;
  turma: number;
}

const studentesMap: Array<Tmap> = [
  { name: "Reijan", turma: 8790 },
  { name: "Reijan", turma: 8790 },
  { name: "Reijan", turma: 8790 },
  { name: "Reijan", turma: 8790 },
  { name: "Reijan", turma: 8790 },
  { name: "Reijan", turma: 8790 },
  { name: "Reijan", turma: 8790 },
];

studentesMap.map((ele) => {
  console.log(ele.name);
});
