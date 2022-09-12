import { boardService } from "../../services/board.service.js";

export function loadBoards() {
  return async (dispatch) => {
    try {
      const boards = await boardService.query();
      dispatch({
        type: "SET_BOARDS",
        boards,
      });
    } catch (err) {
      console.log("board.actions: err @ loadboards", err);
    }
  };
}

export function loadBoard(boardId) {
  return async (dispatch) => {
    try {
      const board = await boardService.getById(boardId);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("board.actions: err @ loadBoard", err);
    }
  };
}

export function onEditBoard(boardToSave) {
  return async (dispatch) => {
    try {
      const savedBoard = await boardService.save(boardToSave);
      dispatch({ type: "UPDATE_BOARD", board: savedBoard });
    } catch (err) {
      console.log("board.actions: err @ onEditBoard", err);
    }
  };
}

export function onRemoveBoard(boardId) {
  return async (dispatch) => {
    try {
      await boardService.remove(boardId);
      dispatch({ type: "REMOVE_BOARD", boardId });
    } catch (err) {
      console.log("board.actions: err @ onRemoveBoard", err);
    }
  };
}
