const express = require("express");
const {
  getProfile,
  updateProfile,
  deleteProfile,
} = require("../controllers/userController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.delete("/profile", protect, deleteProfile);

module.exports = router;