const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const bookSchema = new Schema({
  title: String,
  author: { type: ObjectId, ref: "user", required: true },
  content: { type: String, required: true },
  creadteat: { type: Number, default: Date.now() },
  updateat: { type: Number, default: Date.now() },
});
module.exports = new model("book", bookSchema);
