const populateList = () => {
  const data = Array.from({ length: 100 }).map(
    (_, index) => `<li class="item"> Item ${index + 1}</li>`
  );

  return data;
};

const scrollTest = document.querySelector(".scroll");
const buttonScroll = document.querySelector(".buttonScroll");
buttonScroll.addEventListener("click", () => {
  console.log("foi");
  scrollTest.scrollTop = 0;
});

const data = populateList();

const html = {
  get(element) {
    return document.querySelector(element);
  },
};

const state = {
  page: 1,
  perPage: 5,
  totalPage: Math.ceil(data.length / 5),
};

const controls = {
  next() {
    state.page < state.totalPage ? state.page++ : "";
  },
  prev() {
    state.page > 1 ? state.page-- : "";
  },
  goTo(page) {
    page < 1 ? (state.page = 1) : (state.page = page);
    state.page > state.totalPage ? (state.page = state.totalPage) : "";
  },
  createListeners() {
    html.get(".first").addEventListener("click", () => {
      controls.goTo(1);
      update();
    });
    console.log("1", state.page);
    html.get(".last").addEventListener("click", () => {
      controls.goTo(state.totalPage);
      update();
    });
    console.log("2", state.page);
    html.get(".next").addEventListener("click", () => {
      controls.next();
      update();
    });
    console.log("3", state.page);
    html.get(".prev").addEventListener("click", () => {
      controls.prev(1);
      update();
    });
    console.log("4", state.page);
  },
};

const listCreate = () => {
  const page = state.page - 1;
  const start = page * state.perPage;
  const end = start + state.perPage;
  const paginatedItems = data.slice(start, end);

  const list = document.querySelector(".list");

  list.innerHTML = paginatedItems.join("");
  console.log(paginatedItems);
};

listCreate();

controls.createListeners();
const update = () => {
  listCreate();
};
