const { string } = require("joi");
const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: String,
  address: String,
  phoneno: String,
  creadteat: { type: Number, default: Date.now() },
  updateat: { type: Number, default: Date.now() },
});
module.exports = new model("user", userSchema);
