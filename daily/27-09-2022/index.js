const data = [
  { name: "Reijan", phone: "22222222222", being: "P" },
  { name: "Jose", phone: "22222222222", being: "F" },
  { name: "Felipe", phone: "22222222222" },
];

const tbody = document.querySelector("tbody");

data.map(({ name, phone, being }) => {
  const row = document.createElement("tr");
  row.classList = "List";
  tbody.appendChild(row);

  const rowName = document.createElement("trd");
  rowName.innerHTML = name;
  row.appendChild(rowName);

  const rowPhone = document.createElement("td");
  rowPhone.innerHTML = phone;
  row.appendChild(rowPhone);

  const rowBeing = document.createElement("td");
  row.appendChild(rowBeing);

  const button = document.createElement("button");

  being || !being == "" ? (button.innerHTML = being) : "";
  const styleButton = "width: 24px; height: 21px;";

  if (being == "F") {
    button.style = styleButton + "background-color: red;";
  } else if (being == "P") {
    button.style = styleButton + "background-color: green;";
  } else {
    button.style = styleButton;
  }

  button.addEventListener("click", (e) => {
    being == "F" || !being
      ? (e.target.innerHTML = "P")
      : (e.target.innerHTML = "F");
    being == "F" || !being ? (being = "P") : (being = "F");

    button.style =
      being == "F" ? "background-color: red;" : "background-color: green;";
  });
  rowBeing.appendChild(button);
});
