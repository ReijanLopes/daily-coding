const root = document.querySelector(".root");
const totalRow = 4;
const totalColumn = 8;

const createIds = () => {
  return Array.from({ length: totalRow }).map((_, index) => {
    const list = Array.from({ length: totalColumn })
      .map((_, index) => {
        return {
          randomId:
            Date.now().toString(36) +
            Math.floor(
              Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
            ).toString(36),
          randomNumber: Math.floor(Math.random() * 4),
        };
      })
      .flat();
    return list;
  });
};

const listIds = createIds();

const filtered = (e) => {
  const id = e?.target?.id ? e.target.id : e;
  console.log(id);
  let res = undefined;
  listIds.map((obj, indexRow) => {
    obj.map((item, indexColumn) => {
      if (item.randomId == id) {
        res = { elem: item, indexRow: indexRow, indexColumn: indexColumn };
      }
    });
  });
  return res;
};

const handleClick = (e) => {
  const { elem, indexRow, indexColumn } = filtered(e);
  const array = [elem.randomId];

  const checkKinshipLeft = (elem, indexRow, indexColumn) => {
    if (indexColumn > 0 && indexColumn <= totalColumn) {
      const elemLeft = listIds?.[indexRow]?.[indexColumn - 1];

      if (elem.randomNumber == elemLeft.randomNumber) {
        const { elem, indexRow, indexColumn } = filtered(elemLeft.randomId);
        checkKinshipLeft(elem, indexRow, indexColumn);
        array.unshift(elem.randomId);
      }
    }
  };
  checkKinshipLeft(elem, indexRow, indexColumn);
  console.log(array);
};

const createBox = () => {
  listIds.map((item) => {
    const containerBox = document.createElement("section");
    containerBox.style.margin = "5px 0px";
    containerBox.style.display = "flex";
    containerBox.style.gap = "5px";
    root.appendChild(containerBox);

    item.map(({ randomId, randomNumber }) => {
      console.log(randomId, randomNumber);
      const box = document.createElement("div");
      box.id = randomId;
      box.innerHTML = randomNumber;
      box.value = randomNumber;
      box.style.backgroundColor = "red";
      box.style.width = "50px";
      box.style.height = "50px";
      box.style.display = "flex";
      box.style.alignItems = "center";
      box.style.justifyContent = "center";
      containerBox.appendChild(box);
      box.addEventListener("click", handleClick);
    });
  });
};

createBox();
