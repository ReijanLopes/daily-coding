function cardTypeCheck(stack, card) {
  return stack.filter((item) => item === card).length;
}

const odd = (n) => n % 2 !== 0;
const even = (n) => n % 2 == 0;
function determineOddEvenCards(stack, type) {
  return stack.filter(type ? even : odd).length;
}
cardTypeCheck([1, 2, 1, 1, 2, 1, 9], 2);
determineOddEvenCards([1, 2, 1, 1, 2, 1, 9], false);

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function resize(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

const size = new Size(800, 300);
size.width;
size.height;
size.resize(300, 600);

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function move(newX, newY) {
  this.x = newX;
  this.y = newY;
};

const position = new Position(150, 125);
position.x;
position.y;
position.move(200, 500);

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));
    this.position.move(newX, newY);
  }
}

const newPosition = new Position(710, 525);
const programWindow = new ProgramWindow();
programWindow.move(newPosition);
programWindow.position.x;
programWindow.position.y;

export function changeWindow(programWindow) {
  programWindow.move(new Position());

  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}

const window = changeWindow(programWindow);
window.size.height;
window.size.width;
window.position.x;
window.position.y;
