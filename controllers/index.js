const express = require('express');
const router = express.Router();

const home = require("./homeRoutes");
router.use("/", home)

module.exports = router;