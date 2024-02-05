const router = require("express").Router();
const usercontroller = require("./user.controller");
const { validate } = require("./user.validator");
router.get("/", (req, res, next) => {
  try {
    result = usercontroller.get(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", validate, async (req, res, next) => {
  try {
    result = await usercontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (req, res, next) => {
  try {
    result = usercontroller.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", (req, res, next) => {
  try {
    result = usercontroller.updateById(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    result = usercontroller.removeByid(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
