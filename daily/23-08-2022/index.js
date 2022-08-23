const data = [
  {
    text: "Benjamin Franklin carried out extensive electricity research in the 18th century, inventing the lightning rod amongst his many discoveries. Lightning rods protect buildings in the event of lightning by conducting lightning strikes through a grounded wire.",

  },
];

const ArraySeparateText = [];
const root = document.querySelector(".root");

let count = 0;

const separatingText = () => {
  const allWords = data[0].text.split(" ");
  createdText(allWords);
};

const createdText = (allWords) => {
  allWords.map((words) => {
    const containerWords = document.createElement("section");
    containerWords.className = "containerWords";
    containerWords.style.display = "flex";
    containerWords.style.margin = "10px 0px 0px 0px";
    root.appendChild(containerWords);

    for (const writing of words) {
      const createWriting = document.createElement("div");
      createWriting.className = "writing";
      createWriting.innerHTML = writing;
      containerWords.appendChild(createWriting);
    }

    const lastName = allWords[allWords.length - 1];
    if (lastName !== words) {
      const createSpacer = document.createElement("div");
      createSpacer.className = "writing";
      createSpacer.style.fontSize = "25px";
      createSpacer.innerHTML = "&nbsp";
      containerWords.appendChild(createSpacer);
    }
  });
};

separatingText();   

const separateText = () => {
    for (const words of data[0].text) {
        ArraySeparateText.push(words)
    }
    console.log(ArraySeparateText)
}
separateText()

const pressKey = (e) => {
    const allWriting = document.querySelectorAll(".writing")
 if(ArraySeparateText[count] == e.key){
    allWriting[0].className = "green"
    console.log(allWriting[0])
    console.log(count)
 }else{
    allWriting[0].className = "red"
    console.log(count)
 }

  count++
};

document.addEventListener("keypress", (e) => {
  pressKey(e);
});
