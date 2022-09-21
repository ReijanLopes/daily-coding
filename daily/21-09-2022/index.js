const data = [
  { name: "Reijan", status: "NEW" },
  { name: "Dogras", status: "TODO" },
  { name: "Anabily", status: "INCOMPLETE" },
  { name: "Fabiana", status: "CANCELLED" },
];

const filter = ["ALL", "NEW", "TODO", "COMPLETE", "INCOMPLETE", "CANCELLED"];

const root = document.querySelector(".root");

const clearTasks = (e) => {
    const deleteUl = document.querySelector("ul")
    deleteUl.remove()
    createdList(e.target.value);
};

const createdSelect = () => {
  const select = document.createElement("select");
  select.name = "filterSelect";
  select.id = "12";
  select.onchange = clearTasks;
  root.appendChild(select);

  filter.map((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.innerHTML = status;
    select.appendChild(option);
  });
  
};

const createdList = (status) => {

    console.log(status)
    const ul = document.createElement("ul");
    root.appendChild(ul);

    const filterList = data.map((person) => {
        let res 
        if(status && status != "ALL"){
            person.status == status ? res = person : ""
            return res
        }else{
            return person
        }
    })
    console.log(filterList)
    filterList.map((person) => {
        if(person){
            const li = document.createElement("li");
            li.innerHTML = person.name
            ul.appendChild(li);
        }
    })
}
createdSelect();
createdList()
