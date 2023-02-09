// Implement a clock that handles times without dates.

// You should be able to add and subtract minutes to it.

// Two clocks that represent the same time should be equal to each other.

// Using the built-in Date class and its methods is not allowed.

const formatTime = (n) => {
  return n < 10 ? `0${n}` : `${n}`;
};
const acountDate = (hours, minutes) => {
  const test =
    Math.sign(hours) === -1
      ? ((hours + Math.floor(this.minutes / 60)) % 24) + 24
      : (hours + Math.floor(minutes / 60)) % 24;

  console.log(test);
};
export class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    const hours =
      this.minutes >= 60
        ? acountDate(this.hours, this.minutes)
        : Math.sign(hours) === -1
        ? (this.hours % 24) + 24
        : this.hours % 24;
    const minutes = this.minutes % 60;
    if (!this.minutes) {
      return `${formatTime(hours)}:00`;
    }
    return `${formatTime(hours)}:${formatTime(minutes)}`;
  }
}
