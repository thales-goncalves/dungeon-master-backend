var express = require("express");
var router = express.Router();
const sesssionController = require("../controllers/SessionController")

router.get("/login", (req, res) => {
  sesssionController.index(res)
});

router.post("/logout", (req, res) => {
  res.send("ENDPOINT Logout");
});

module.exports = router;
