import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

import { WindowOverlay } from "../window-overlay";
import { ListCardContent } from "../list/list-card-content";
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
  const [btnMenuRight] = useState(true);

  const goBackToBoard = (ev) => {
    ev.stopPropagation();
    dispatch(closePopover());
  };

  const getPosStyle = () => ({
    top: elPos.y - 6,
    left: elPos.x - 230,
  });

  return (
    <section className="quick-card-editor">
      {console.log(elPos)}
      <WindowOverlay goBack={goBackToBoard}>
        <div className="quick-card-editor-container" style={getPosStyle()}>
          <ListCardContent
            currCard={currCard}
            currBoard={board}
            currList={currList}
            isQuickEdit
          />
          <button id="add-card-btn" className="btn btn-primary">
            Save
          </button>
          <div
            className={`quick-card-editor-buttons ${
              btnMenuRight
                ? "quick-card-editor-buttons-right"
                : "quick-card-editor-buttons-right"
            } fade-in`}
          ></div>
        </div>
      </WindowOverlay>
    </section>
  );
};
