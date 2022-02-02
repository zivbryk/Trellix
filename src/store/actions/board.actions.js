import { boardService } from "../../services/board.service.js";
import { showSuccessMsg, showErrorMsg } from "../../services/event-bus.service";
export function loadBoards() {
  return async (dispatch) => {
    try {
      console.log("loading boards!");
      const boards = await boardService.query();
      console.log(boards);
      dispatch({
        type: "SET_BOARDS",
        boards,
      });
      showSuccessMsg("Boards loaded succesfully");
    } catch (err) {
      showErrorMsg("Cannot load boards @ board.actions");
      console.log("Cannot load boards  @ board.actions", err);
    }
  };
}
