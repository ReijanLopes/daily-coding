const allergies = {
    eggs: 1, 
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  }
  const keysAllergies = Object.keys(allergies);
  
  export class Allergies {
    constructor(allergicLevel) {
      this.listAllergies = keysAllergies.filter((_, i) => allergicLevel & 2 ** i);
    }
    list() {
      return this.listAllergies;
    }
    allergicTo(allergen) {
      return this.listAllergies.includes(allergen)
    }
  }