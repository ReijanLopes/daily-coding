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
  }, 2000);
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
  
  const f = data.filter((item) => {
   return item.name.toUpperCase().includes(nameStudent); 
  });
  // quando o elemento e passado dentro da funcao ({um novo escopo da função}) necessita de return
  delet();
  creatTable(f);
};

const delet = () => {
  let itemsdelet = document.querySelectorAll(".card");
  console.log(itemsdelet)
  itemsdelet.forEach(item => {
    item.remove();
  });
    
  // provavelente apagar todos os elementos filhos seja ruim, pode ser q eu apague so o numero de elementos que restam e mudar o innerHTML dos elementos que seria usados, 
  // o texto acima foi testado, ruim pq todos os elementos foram atualizados de qualquer forma.  
  // teste 1: flitrar e recolocar elementos, pesquisar por que lookForStudent so funciona quando click ou quando aperto enter

};
