// an example of a router dedicated to a resource
const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);

module.exports = router;
