const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const ObjectId = require("mongodb").ObjectId;

async function query(filterBy = { ctg: "" }) {
  try {
    const criteria = _buildCriteria(filterBy);
    const collection = await dbService.getCollection("board");
    var boards = await collection.find(criteria).toArray();
    return boards;
  } catch (err) {
    logger.error("cannot find boards", err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = {};
  const { ctg } = filterBy;
  if (ctg === "starred") {
    criteria.isFavorite = { $eq: true };
  }
  return criteria;
}

async function getById(boardId) {
  try {
    const collection = await dbService.getCollection("board");
    const board = await collection.findOne({ _id: ObjectId(boardId) });
    return board;
  } catch (err) {
    logger.error(`Error while finding board ${boardId}`, err);
    throw err;
  }
}

async function remove(boardId) {
  try {
    const collection = await dbService.getCollection("board");
    await collection.deleteOne({ _id: ObjectId(boardId) });
    return boardId;
  } catch (err) {
    logger.error(`cannot remove board ${boardId}`, err);
    throw err;
  }
}

async function add(board) {
  try {
    let boardToAdd = {
      createdAt: Date.now(),
      title: board.title,
      createdBy: board.createdBy,
      dueDate: board.dueDate,
      isStarred: board.isStarred,
      style: {
        cover: board.style.cover,
        isImage: board.style.isImage,
        boardCoverAttachments: board.style.boardCoverAttachments,
      },
      labels: [],
      boardMembers: board.boardMembers,
      lists: [],
      activities: [],
    };

    const collection = await dbService.getCollection("board");
    await collection.insertOne(boardToAdd);
    return boardToAdd;
  } catch (err) {
    logger.error("cannot add board", err);
    throw err;
  }
}

async function update(board) {
  try {
    let boardToUpdate = {
      _id: ObjectId(board._id),
      title: board.title,
      createdBy: board.createdBy,
      dueDate: board.dueDate,
      isStarred: board.isStarred,
      style: {
        cover: board.style.cover,
        isImage: board.style.isImage,
        boardCoverAttachments: board.style.boardCoverAttachments,
      },
      labels: board.labels,
      boardMembers: board.boardMembers,
      lists: board.lists,
      activities: board.activities,
    };

    const collection = await dbService.getCollection("board");
    await collection.updateOne(
      { _id: boardToUpdate._id },
      { $set: boardToUpdate }
    );
    return boardToUpdate;
  } catch (err) {
    logger.error(`cannot update board ${board._id}`, err);
    throw err;
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
};
