const express = require("express");
const fs = require("fs")
const app = express();

const port = 3001;

const createFiles = () => {
    console.log("foi")
  
    fs.mkdir("posts", (err) => {
      if (err) console.log(err);
      console.log("Saved!");
    });
};

const createAndUpdateFiles = () => {
  fs.writeFile(__dirname + "/posts/index.js", "const data = {name: 'Reijan'}", function (err) {
    if (err) console.log(err);
    console.log("Saved!");
  });
};


createFiles()
createAndUpdateFiles()

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
  
});
