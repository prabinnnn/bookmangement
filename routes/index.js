const router = require("express").Router();
const bookrouter = require("../module/book/book.route");
const userrouter = require("../module/book/users/user.route");
router.use("/api/v1/user", userrouter);
router.use("/api/v2/book", bookrouter);
module.exports = router;
