const express = require("express");
const {
  getDetails,
  getSingleDetails,
  postDetails,
  updateDetails,
  deleteDetails,
  newInfo,
} = require("../controllers/mainController");
const router = express.Router();

router.get("/", getDetails);
router.get("/info",newInfo)
router.get("/:id", getSingleDetails);
router.post("/", postDetails);
router.put("/:id", updateDetails);
router.delete("/:id", deleteDetails);

module.exports = router;
