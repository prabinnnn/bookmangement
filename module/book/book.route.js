const router = require("express").Router();
const bookcontrol = require("./book.controller");
router.get("/", (req, res, next) => {
  try {
    result = bookcontrol.get(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    result = bookcontrol.create(req.body);
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
