const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const indexofrouter = require("./routes");
const PORT = Number(process.env.PORT);

app.use(morgan("dev"));
app.use(express.json());
app.use("/", indexofrouter);
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something missing";
  res.status(500).json({ msg: err });
});
app.listen(PORT, () => {
  console.log("app is runing");
});
