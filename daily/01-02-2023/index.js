const elementsAllergies = {
  cats: 128,
  pollen: 64,
  chocolate: 32,
  tomatoes: 16,
  strawberries: 8,
  shellfish: 4,
  peanuts: 2,
  eggs: 1,
};

const filteredElements = (allergicLevel) => {
  if (allergicLevel >= 257) {
    return ["eggs"];
  }
  return Object.keys(elementsAllergies)
    .filter((elements) => {
      if (elementsAllergies?.[elements] <= allergicLevel) {
        allergicLevel -= elementsAllergies?.[elements];
        return elements;
      }
    })
    .reverse();
};

class Allergies {
  constructor(allergicLevel) {
    this.allergicLevel = allergicLevel;
  }

  list() {
    return filteredElements(this.allergicLevel);
  }

  allergicTo(allergicTrigger) {
    const elements = filteredElements(this.allergicLevel);
    return elements.indexOf(allergicTrigger) >= 0 ? true : false;
  }
}

const allergies = new Allergies(255);
allergies.list();
allergies.allergicTo("shellfish");
