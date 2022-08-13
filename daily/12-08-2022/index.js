const persons = [
  { firstName: "Reijan", lastName: "Lopes", location: "São Paulo" },
  { firstName: "Ruan", lastName: "Lopes", location: "São Paulo" },
  { firstName: "Marcos", lastName: "Lopes", location: "São Paulo" }
];

let allName = [] 
persons.map((person) => {
    allName.push(person.firstName)
})
console.log(allName)
