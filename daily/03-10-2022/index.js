const data = [
  { name: "Reijan1", callroll: "1" },
  { name: "Reijan2", callroll: "2" },
  { name: "Reijan3", callroll: "3" },
  { name: "Reijan4", callroll: "4" },
];
const href = window.location.href;
const current = () => {
  if (href.includes("?next=")) {
    const pageCurrent = href.split("?next=");
    return pageCurrent[1];
  } else {
    return 1;
  }
};

const state = {
  perPage: 1,
  page: current(),
  totalPage: Math.ceil(data.length / 1),
};

const controlsPagination = {
  next() {
    if (current() && current() < state.totalPage) {
      state.page++;
      window.location.href = `?next=${state.page}`;
    }
  },
  previous() {
    if (current() && current() > 1) {
      state.page--;
      window.location.href = `?next=${state.page}`;
    }
  },
};

current();

const content = () => {
  const page = state.page - 1;
  const start = page * state.perPage;
  const end = start + state.perPage;
  const paginatedItems = data.slice(start, end);
};

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

previous.addEventListener("click", () => {
  content();
  controlsPagination.previous();
});
next.addEventListener("click", () => {
  content();
  controlsPagination.next();
});
