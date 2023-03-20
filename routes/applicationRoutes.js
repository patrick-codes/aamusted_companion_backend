const express = require("express");
const {
  getDetails,
  getSingleDetails,
  postDetails,
  updateDetails,
  deleteDetails,
} = require("../controllers/mainController");
const router = express.Router();

router.get("/", getDetails);
router.get("/:id", getSingleDetails);
router.post("/", postDetails);
router.put("/:id", updateDetails);
router.delete("/:id", deleteDetails);

module.exports = router;
