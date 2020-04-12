export {};
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth")
const userController = require("../controllers/UserController")


router.use(authMiddleware)
router.get("/", userController.index);

router.post("/",  userController.store);

router.get('/:userId', (req, res) => {
  res.send("User ID: " + req.params.userId);
});



module.exports = router;