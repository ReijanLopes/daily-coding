function errorMessage(input) {
  const number = Number(input);
  if (!input) {
    return "Required field";
  } else if (!isNaN(number) && number > 0) {
    return "";
  }
  return "Must be a number besides 0";
}

errorMessage("4 2");

export function preparationTime(manyLayers, time) {
  const currentTime = time ? time : 2;
  return manyLayers.length * currentTime;
}

const manyLayers = [
  "sauce",
  "noodles",
  "béchamel",
  "meat",
  "mozzarella",
  "noodles",
  "ricotta",
  "eggplant",
  "béchamel",
  "noodles",
  "sauce",
  "mozzarella",
];

preparationTime(manyLayers);

export function quantities(manyLayers) {
  const res = { noodles: 0, sauce: 0 };

  for (let layer of manyLayers) {
    if (layer in res) {
      res[layer] += layer === "noodles" ? 50 : 0.2;
    }
  }

  return res;
}
quantities(manyLayers);

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

const createFriendsList = () => [
  "noodles",
  "tomatoes",
  "sauce",
  "meat",
  "mozzarella",
  "eggplant",
  "ricotta",
  "parmesan",
];

const friendsList = createFriendsList();

addSecretIngredient(
  ["sauce", "noodles", "béchamel", "marjoram"],
  ["sauce", "noodles", "meat", "tomatoes"]
);

export function scaleRecipe(recipe, newPortions) {
  let scaleFactor = newPortions / 2;
  let scaledRecipe = {};
  for (let ingredient in recipe)
    scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
  return scaledRecipe;
}

const recipe1 = {
  sauce: 0.5,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 0.5,
};

scaleRecipe(recipe1, 6);
