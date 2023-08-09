const express = require("express");

const router = express.Router();

const {verifyAdmin} = require("../utils/verifyToken")

// Controller
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getallRoom,
  updateRoomnumber
} = require("../controllers/roomController");

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

router.put("/availability/:id", updateRoomnumber);
// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// GET
router.get("/:id", getRoom);
// GET ALL
router.get("/", getallRoom);

module.exports = router;
