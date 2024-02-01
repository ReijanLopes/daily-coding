const space = (message) => message.trim().length === 0;
const shout = (message) =>
  /[a-z]/i.test(message) && message === message.toUpperCase();
const isQuestion = (message) => message.trim().endsWith("?");
const shoutAndQuestion = (message) => shout(message) && isQuestion(message);
const isDefault = () => true;
const rules = [
  { test: space, response: "Fine. Be that way!" },
  { test: shoutAndQuestion, response: "Calm down, I know what I'm doing!" },
  { test: shout, response: "Whoa, chill out!" },
  { test: isQuestion, response: "Sure." },
  { test: isDefault, response: "Whatever." },
];

const hey = (message) => rules.find(({ test }) => test(message)).response;
hey("Does this cryogenic chamber make me look fat?");
