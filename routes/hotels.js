const express = require("express");
const Hotel = require("../models/Hotel");

const router = express.Router();
const { verifyAdmin } = require("../utils/verifyToken");

const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getallHotel,
} = require("../controllers/hotelController");

// CREATE
router.post("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// GET
router.get("/:id", getHotel);
// GET ALL
router.get("/", getallHotel);

module.exports = router;
