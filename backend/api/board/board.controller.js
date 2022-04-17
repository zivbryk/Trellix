const boardService = require("./board.service");
const logger = require("../../services/logger.service");

// GET LIST
async function getBoards(req, res) {
  try {
    var queryParams = req.query;
    const boards = await boardService.query(queryParams);
    res.send(boards);
  } catch (err) {
    logger.error("Failed to get boards", err);
    res.status(500).send({ err: "Failed to get boards" });
  }
}

// GET BY ID
async function getBoardById(req, res) {
  try {
    const boardId = req.params.id;
    const board = await boardService.getById(boardId);
    res.send(board);
  } catch (err) {
    logger.error("Failed to get board", err);
    res.status(500).send({ err: "Failed to get board" });
  }
}

// POST (add board)
async function addBoard(req, res) {
  try {
    const board = req.body;
    const addedBoard = await boardService.add(board);
    console.log("addedBoard from board controller", addedBoard);
    res.send(addedBoard);
  } catch (err) {
    logger.error("Failed to add board", err);
    res.status(500).send({ err: "Failed to add board" });
  }
}

// PUT (Update board)
async function updateBoard(req, res) {
  try {
    const board = req.body;
    const updatedBoard = await boardService.update(board);
    res.send(updatedBoard);
  } catch (err) {
    logger.error("Failed to update board", err);
    res.status(500).send({ err: "Failed to update board" });
  }
}

// DELETE (Remove board)
async function removeBoard(req, res) {
  try {
    const boardId = req.params.id;
    await boardService.remove(boardId);
    res.send({ msg: "Board deleted successfully" });
  } catch (err) {
    logger.error("Failed to remove board", err);
    res.status(500).send({ err: "Failed to remove board" });
  }
}

module.exports = {
  getBoards: getBoards,
  getBoardById: getBoardById,
  addBoard: addBoard,
  updateBoard: updateBoard,
  removeBoard: removeBoard,
};
