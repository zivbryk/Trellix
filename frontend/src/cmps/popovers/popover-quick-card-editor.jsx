import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { WindowOverlay } from "../window-overlay";
import { ListCardContent } from "../list/list-card-content";
import { ListCardQuickEditBtns } from "../list/list-card-quick-edit-btns";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverQuickCardEditor = ({
  currCard,
  currList,
  elPos,
  handleClose,
  mod,
}) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();

  const goBackToBoard = (ev) => {
    ev.stopPropagation();
    dispatch(closePopover());
  };

  const getPosStyle = () => ({
    top: elPos.y - 2,
    left: elPos.x - 226,
  });

  const handleClick = (ev) => {
    ev.stopPropagation();
  };

  return (
    <section className="quick-card-editor">
      <WindowOverlay goBack={goBackToBoard}>
        <div
          className="quick-card-editor-container flex"
          style={getPosStyle()}
          onClick={handleClick}
        >
          <div className="quick-card-editor-card-preview">
            <ListCardContent
              currCard={currCard}
              currBoard={board}
              currList={currList}
              isQuickEdit
            />
            <button id="add-card-btn" className="btn btn-primary">
              Save
            </button>
          </div>
          <ListCardQuickEditBtns
            currCard={currCard}
            currBoard={board}
            currList={currList}
          />
        </div>
      </WindowOverlay>
    </section>
  );
};
