export function toggleListCardLabels() {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_LABELS" });
  };
}

export function openPopover(popoverName, elPos, popoverProps) {
  return (dispatch) => {
    const action = {
      type: "SET_POPOVER",
      popoverName,
      elPos,
      popoverProps,
    };
    dispatch(action);
  };
}

export function closePopover() {
  return (dispatch) => {
    const action = {
      type: "CLOSE_POPOVER",
    };
    dispatch(action);
  };
}
// export function loadBoards() {
//   return async (dispatch) => {
//     try {
//       // console.log("loading boards!");
//       const boards = await boardService.query();
//       // console.log(boards);
//       dispatch({
//         type: "SET_BOARDS",
//         boards,
//       });
//       showSuccessMsg("Boards loaded succesfully");
//     } catch (err) {
//       showErrorMsg("Cannot load boards");
//       console.log("board.actions: err @ loadboards", err);
//     }
//   };
// }

// export function loadBoard(boardId) {
//   return async (dispatch) => {
//     try {
//       const board = await boardService.getById(boardId);
//       dispatch({ type: "SET_BOARD", board });
//       showSuccessMsg("Board loaded succesfully");
//     } catch (err) {
//       showErrorMsg("Cannot load board");
//       console.log("board.actions: err @ loadBoard", err);
//     }
//   };
// }

// export function onEditBoard(boardToSave) {
//   return async (dispatch) => {
//     try {
//       const savedBoard = await boardService.save(boardToSave);
//       dispatch({ type: "UPDATE_BOARD", board: savedBoard });
//       showSuccessMsg("Board updated succesfully");
//     } catch (err) {
//       showErrorMsg("Cannot update board");
//       console.log("board.actions: err @ onEditBoard", err);
//     }
//   };
// }
