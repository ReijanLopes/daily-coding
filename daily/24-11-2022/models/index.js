import mongoose from "mongoose";

const Polygon = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  border: {
    type: String,
    require: false,
  },
  bgColor: {
    type: String,
    require: false,
  },
  width: {
    type: Number,
    require: false,
  },
  length: {
    type: Number,
    require: false,
  },
  location: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Polygon", Polygon);
