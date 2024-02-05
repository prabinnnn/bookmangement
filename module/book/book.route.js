const router = require("express").Router();
const bookcontrol = require("./book.controller");
const { validate } = require("./book.validator");
router.get("/", async (req, res, next) => {
  try {
    result = await bookcontrol.get(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", validate, async (req, res, next) => {
  try {
    result = await bookcontrol.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (req, res, next) => {
  try {
    result = bookcontrol.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", (req, res, next) => {
  try {
    result = bookcontrol.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    result = bookcontrol.remove(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
