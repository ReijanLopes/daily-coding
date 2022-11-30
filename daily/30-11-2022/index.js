const users1 = { id: "2342jfsoi2342as42", typeClient: "admin", name: "reijan" };

const users2 = { id: "2342jfsoi2342lj42", typeClient: "client", name: "jose" };

const users3 = {
  id: "2342jfsoi2342ls43",
  typeClient: "client",
  name: "micael",
};

const dataBase = [
  { id: 1, type: "file", permissions: ["2342jfsoi2342as42"] },
  {
    id: 2,
    type: "file",
    permissions: ["2342jfsoi2342lj42", "2342jfsoi2342as42"],
  },
  { id: 3, type: "file", permissions: ["2342jfsoi2342ls43"] },
  { id: 4, type: "file", permissions: ["2342jfsoi2342la44"] },
  {
    id: 5,
    type: "file",
    permissions: ["2342jfsoi2342as42", "2342jfsoi2342lj42"],
  },
];

function getFile(user) {
  if (user?.typeClient === "admin") {
    return dataBase;
  }
  return dataBase.filter((item) => {
    return item.permissions.some((item) => item == user.id);
  });
}

console.log(getFile(users2));
