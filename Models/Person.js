const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    position: { type: String },
    id: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Person", personSchema);
