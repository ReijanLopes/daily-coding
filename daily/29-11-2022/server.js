const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://maxRe:iZcRDNZPCWfUeIyJ@linktree.fcmpv.mongodb.net/linktree?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port || 3001, () => {
      console.log(`Server Running on ${port || 3001}`);
    });
  })
  .catch((err) => console.log(err));
