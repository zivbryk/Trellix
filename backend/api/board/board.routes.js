const express = require("express");
const { log } = require("../../middlewares/logger.middleware");
const {
  getBoards,
  getBoardById,
  addBoard,
  updateBoard,
  removeBoard,
} = require("./board.controller");
const router = express.Router();

router.get("/", log, getBoards);
router.get("/:id", log, getBoardById);
router.post("/", log, addBoard);
router.put("/:id", log, updateBoard);
router.delete("/:id", log, removeBoard);

module.exports = router;
