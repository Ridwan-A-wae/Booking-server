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
} = require("../controllers/roomController");

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);
// GET
router.get("/:id", getRoom);
// GET ALL
router.get("/", getallRoom);

module.exports = router;
