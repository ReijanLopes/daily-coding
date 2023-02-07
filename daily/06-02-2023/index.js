const user = "projectOwner12";
const body = {
  projectOwner: { id: "projectOwner12", name: "Reijan" },
  projectAdmins: [
    { id: "projectAdmin1", name: "Reijan1" },
    { id: "projectAdmin12", name: "Reijan2" },
    { id: "projectAdmin123", name: "Reijan3" },
    { id: "projectAdmin1234", name: "Reijan4" },
    { id: "projectAdmin12345", name: "Reijan5" },
  ],
  collaborators: [
    { id: "collaborator1", name: "Reijan11" },
    { id: "collaborator12", name: "Reijan12" },
    { id: "collaborator123", name: "Reijan13" },
    { id: "collaborator1234", name: "Reijan14" },
    { id: "collaborator12345", name: "Reijan15" },
  ],
  nodes: [{ id: 123, coordinates: { x: 2, y: 1 } }],
  view: "private",
  accessKey: "123141141341516645422",
};

const { projectOwner, projectAdmin, collaborator, view } = body;

const occupationUserProject = (body, user) => {
  const { view, accessKey, ...rest } = body;
  let occupationUser = "";

  Object.keys(rest).map((occupation) => {
    if (!rest?.[occupation].length) {
      rest[occupation].id === user ? (occupationUser = occupation) : null;
    } else {
      rest?.[occupation].map((item) => {
        item.id === user ? (occupationUser = occupation) : null;
      });
    }
  });

  return occupationUser;
};

const accessUser = {
  projectOwner: true,
  projectAdmin: !projectOwner && !view ? true : false,
  occupation:
    !projectOwner && !projectAdmin && !occupation && !view ? true : false,
};
const occupation = occupationUserProject(body, user);
console.log(accessUser[occupation]);
