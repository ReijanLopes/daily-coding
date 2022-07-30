const listaAlunos = [];
const root = document.querySelector(".root");
const inputName = document.querySelector(".Name");

// type data {name, number, birday}

const data = [
  { name: "reijan", birday: 2345242, number: 97839283828 },
  { name: "rei", birday: 2345242, number: 97839283828 },
  { name: "jose", birday: 2345242, number: 97839283828 },
  { name: "marta", birday: 2345242, number: 97839283828 },
  { name: "lucas", birday: 2345242, number: 97839283828 },
  { name: "felipe", birday: 2345242, number: 97839283828 },
  { name: "ruan", birday: 2345242, number: 97839283828 },
  { name: "geferson", birday: 2345242, number: 97839283828 },
  { name: "brenda", birday: 2345242, number: 97839283828 },
  { name: "marta", birday: 2345242, number: 97839283828 },
  { name: "vvian", birday: 2345242, number: 97839283828 },
  { name: "janice", birday: 2345242, number: 97839283828 },
];

const debouce = (handler) => {
  let time;

  clearTimeout(time);
  time = setTimeout(() => {
    handler;
  }, 200);
};

const creatTable = (data) => {
  data.map((item) => {
    let studentCard = document.createElement("tr");
    studentCard.className = "card";
    root.appendChild(studentCard);

    let containerBirday = document.createElement("td");
    containerBirday.className = "containerItem";
    containerBirday.innerHTML = item.birday;
    studentCard.appendChild(containerBirday);

    let containerName = document.createElement("td");
    containerName.className = "containerItem";
    containerName.innerHTML = item.name;
    studentCard.appendChild(containerName);

    let containerNumber = document.createElement("td");
    containerNumber.className = "containerItem";
    containerNumber.innerHTML = item.number;
    studentCard.appendChild(containerNumber);
  });
};

creatTable(data);

inputName.addEventListener("change", (e) => debouce(lookForStudent(e)));
const lookForStudent = (e) => {
  const nameStudent = e.target.value.toUpperCase();
  console.log(nameStudent);
  const filter = data.filter((item) => {
    item.name.toUpperCase().includes(nameStudent);
  });

  delet();

  creatTable(filter);
  //farai a funcao ser chamada covamente, seria prejudicial, pq so encrementaria mais cards, acredito q a maneira mais facil seria clonar a tabela e mandar
};

const delet = () => {
  let itemsdelet = document.querySelectorAll("card");

  itemsdelet.map((item) => {
    item.remove();
  });
  // provavelente apagar todos os elementos filhos seja ruim, pode ser q eu apague so o numero q resta e deixar o numero de obj e mudar seu innerHTML
  //fazendo a mao assim se torna mais complicado, vc tem alguma dica de como atualizar de maneira mais dinamica,
};
