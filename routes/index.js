const router = require("express").Router();
const bookrouter = require("../module/book/book.route");
router.use("/api/v1", bookrouter);
module.exports = router;
