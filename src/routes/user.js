var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("All users in the system");
});

router.get('/:userId', (req, res) => {
  res.send("User ID: " + req.params.userId);
});



module.exports = router;