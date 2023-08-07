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
  countByCity,
  countByType
} = require("../controllers/hotelController");

// CREATE
router.post("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// GET
router.get("/find/:id", getHotel);
// GET ALL
router.get("/", getallHotel);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);





module.exports = router;
