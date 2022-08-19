const containerFilter = document.querySelector(".containerFilter");
const contentContainer = document.querySelector(".contentContainer");

const matters = [];
const data = [
  {
    matter: "React",
    title: "JoseR",
    date: "18/08",
    spoiler:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    matter: "React",
    title: "JoseR",
    date: "18/08",
    spoiler:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    matter: "JS",
    title: "Jose",
    date: "18/08",
    spoiler:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    matter: "CSS",
    title: "Jose",
    date: "18/08",
    spoiler:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    matter: "JS",
    title: "Jose",
    date: "18/08",
    spoiler:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    matter: "React",
    title: "JoseR",
    date: "18/08",
    spoiler:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
];



const createContent = (data) => {
  data.map((item) => {
    const cardContainer = document.createElement("section");
    cardContainer.className = "cardContainer";
    cardContainer.style.width = "250px";
    cardContainer.style.height = "120px";
    contentContainer.appendChild(cardContainer);

    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";
    cardContainer.appendChild(titleContainer);

    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = item.title
    titleContainer.appendChild(title);

    const date = document.createElement("div");
    date.className = "date";
    date.innerHTML = item.date
    titleContainer.appendChild(date);

    const spoiler = document.createElement("div");
    spoiler.className = "spoiler";
    spoiler.innerHTML = item.spoiler
    cardContainer.appendChild(spoiler);
  });
};

const deleteCards = () => {
    
    const cardContainer = document.querySelectorAll(".cardContainer")
    console.log(cardContainer)
    cardContainer.forEach((card) => {
        card.remove()
    })
}

const filterMatters = (value) => {
    const filter = data.sort().filter((item) => item.matter == value)
    deleteCards()
    createContent(filter)
}

const createButtonFilter = (array) => {
    array?.map((item) => {
      if (item) {
        const button = document.createElement("button");
        button.className = "buttonFilter";
        button.innerHTML = item;
        button.addEventListener("click", (e) => {
          filterMatters(e.target.innerHTML)
        })
        containerFilter.appendChild(button);
      }
    });
    if(array){
        const button = document.createElement("button");
        button.className = "buttonFilter";
        button.innerHTML = "X";
        button.style.marginLeft = "10px"
        button.addEventListener("click", () => {
            deleteCards()
            createContent(data);
        })
        containerFilter.appendChild(button);
    }
  };

const testFilter = () => {
  data.map((item) => {
    matters.push(item.matter);
  });
  const filterMatters = matters.filter(
    (este, i) => matters.indexOf(este) === i
  );
  createButtonFilter(filterMatters);
  createContent(data);
};

testFilter();
