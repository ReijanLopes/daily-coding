import express from "express";
import mongoose from "mongoose";
import { env } from "process";
import { Router } from "express";

import Polygon from "./models/index";

const app = express();
const router = Router();
const port = 3000;

router.post("/polygon/mutate", async (req, res) => {
  const { id, border, bgColor, width, length, location } = req.body;

  const idRandom =
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36);

  const _width = width ? Number(width) : 50;
  const _length = length ? Number(length) : 50;

  if (!id) {
    try {
      const create = await Polygon.create({
        id: idRandom,
        width: _width,
        length: _length,
      });
      create.save();
      return create;
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    Polygon.updateOne(
      {
        id,
      },
      {
        border,
        bgColor,
        width,
        length,
        location,
      }
    );
  }
});

mongoose
  .connect(env.MONGOOSE_KEY, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
