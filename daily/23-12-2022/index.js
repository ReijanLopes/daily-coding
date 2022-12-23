const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const isPangram = (text) => {
  const splitted = text.toLowerCase().split("");
  return alphabet.every((item) => splitted.includes(item));
};

isPangram('"Five quacking Zephyrs jolt my wax bed."');

function isValidCommand(command) {
  const loweCommand = command.toLowerCase().split(" ");
  loweCommand?.[0] === "chatbot,"; // first possibility

  return /chatbot/i.test(command); // second possibility
}

isValidCommand("Chatbot, please tell me what is happening here.");

function removeEmoji(message) {
  const splitted = message.split(" ");
  splitted.map((item) => (/\d/.test(item) ? "" : item)).join(" "); // first possibility

  return message.replaceAll(/emoji\d+/gi, ""); // second possibility
}

removeEmoji("emoji5321 How about ordering emoji8921 ?");

function checkPhoneNumber(number) {
  const checkNumber = /[(]\+\d{2}[)] \d{3}-\d{3}-\d{3}/.test(number);
  if (checkNumber) return "Thanks! You can now download me to your phone.";
  return `Oops, it seems like I can't reach out to ${number}`;
}

checkPhoneNumber("4355-67-274");

function getURL(userInput) {
  const splitted = userInput.split(" ");
  splitted.filter((item) => /\./.test(item)); // first possibility

  return userInput.match(/[a-z]+\.[a-z]+/g); // second possibility
}

getURL("That was from reddit.com and notion.so");

function niceToMeetYou(fullName) {
  const [second, first] = fullName.split(", ");
  return `Nice to meet you, ${first} ${second}`;
}

niceToMeetYou("Stephan, Sandro");
