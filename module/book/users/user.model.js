const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: String,
  address: { type: String, required: true },
});
module.exports = new model("user", userSchema);
