class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const auto = new Car("Honda", "Accord", 1998);

auto instanceof Car;
auto.make;
auto.model;
auto.year;

function C(name) {
  this.name = name;
}
const o = new C("jose");

o instanceof C;
o.name;
//instanceof: Test if an object has a prototype

class People {
  constructor(name) {
    this.name = name;
  }
}

class User extends People {
  constructor(name) {
    this.name = name;
  }
}

const user = new People("jose");
user.name;
