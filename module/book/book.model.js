const { Schema, model } = require("mongoose");
const bookSchema = new Schema({
  title: String,
  author: { type: Array, required: true },
  content: { type: String, required: true },
});
module.exports = new model("book", bookSchema);
