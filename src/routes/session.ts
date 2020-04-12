export {};

var express = require("express");
var router = express.Router();
const sesssionController = require("../controllers/SessionController");

router.post("/login", sesssionController.store);

router.post("/logout", (req, res) => {
  res.send("ENDPOINT Logout");
});

module.exports = router;
