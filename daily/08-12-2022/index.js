const names = ["Jose", "Ramus", "Marcos"];
const numbers = [1, 12, 34, 89, 23];

const [first, ...rest] = names;

console.log([first, ...numbers, ...rest]);

const userData = [
  {
    name: "REIJAN",
    email: "test@gmail.com",
    about: { typeJob: "bricklayer", permission: "LOW" },
    servicesID: ["12345612", "13141231123"],
  },
  {
    name: "LUCAS",
    email: "test@gmail.com",
    about: { typeJob: "bricklayer", permission: "LOW" },
    servicesID: ["12345612", "131412311"],
  },
];

const servicesDone = [
  { id: "12345612", name: 1 },
  { id: "1234561f", name: 2 },
  { id: "13141231123", name: 3 },
  { id: "131412311", name: 4 },
];

function getUser(nameUser) {
  const user = userData.filter((item) => item.name === nameUser.toUpperCase());
  return user;
}

function OneToMany(key, arrayRelationship, nameUser) {
  // relation one to many [item]+ID: string
  const [user] = getUser(nameUser);

  const userServices = user[key + "ID"].map((IDs) => {
    return arrayRelationship.filter((item) => item.id === IDs);
  });

  user[key] = userServices;
  delete user[key + "ID"];

  return user;
}
OneToMany("services", servicesDone, "reijan");
