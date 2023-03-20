const express = require("express");
const {
  userLogin,
  userSignup,
  userfInfo,
} = require("../controllers/loginController");

const router = express.Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);
router.get("/getinfo", userfInfo);

module.exports = router;
