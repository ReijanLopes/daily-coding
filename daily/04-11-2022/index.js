let totalAttemptsGetApi = 0;
const getAPI = async () => {
  try {
    const dataJson = await fetch("https://urlFake.com");
    return dataJson.json();
  } catch (error) {
    if (totalAttemptsGetApi < 3 && error !== "Você não tem permisão") {
      getAPI();
      totalAttemptsGetApi += 1;
    }
    if (error === "Você não tem permisão") {
      console.log(error);
    }
  }

  if (totalAttemptsGetApi > 3) {
    console.log("A um problema com a sua internet");
    totalAttemptsGetApi = 0;
  }
};

window.addEventListener("online", () => {
  data();
});
window.addEventListener("offline", () => (canActivate = false));

document
  .getElementById("statusCheck")
  .addEventListener("click", () => getAPI());
