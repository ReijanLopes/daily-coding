const data = [
  {
    title: "Comment Your JavaScript Code",
    content: "For example, computers distinguish between numbers",
  },
  {
    title: "Declare JavaScript Variables",
    content:
      "In computer science, data is anything that is meaningful to the computer.",
  },
  {
    title: "Storing Values with the Assignment Operator",
    content:
      "In JavaScript, you can store a value in a variable with the assignment operator",
  },
  {
    title: "Assigning the Value of One Variable to Another",
    content:
      "After a value is assigned to a variable using the assignment operator",
  },
  {
    title: "Initializing Variables with the Assignment Operator",
    content:
      "It is common to initialize a variable to an initial value in the same line as it is declared.",
  },
];

const body = document.querySelector("body");

const formatTitleByUrl = (text) => {
  const res = text.toLowerCase().split(" ").join("-");
  return res;
};

const createList = () => {
  const url = new URL(window.location.href);
  const search = url.searchParams.get("title");
  const formatUrl = search?.split("-").join(" ") || "";

  const test = search
    ? data.filter((item) => {
        return item.title.toLowerCase() == formatUrl;
      })
    : data;

  console.log(test);
  test.map((item) => {
    const card = document.createElement("div");
    card.style.border = "solid black 2px";
    card.style.marginBottom = "5px";
    body.appendChild(card);
    const title = document.createElement("a");
    title.innerHTML = item.title;
    console.log;
    title.href = `?title=${formatTitleByUrl(item.title)}`;
    card.appendChild(title);

    const content = document.createElement("p");
    content.innerHTML = item.content;
    card.appendChild(content);
  });
};

createList();
