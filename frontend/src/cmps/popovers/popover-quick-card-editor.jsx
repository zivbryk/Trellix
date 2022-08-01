import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

import { WindowOverlay } from "../window-overlay";
import { ListCardContent } from "../list/list-card-content";
import { ListCardQuickEdit } from "../list/list-card-quick-edit";
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

  return (
    <section className="quick-card-editor">
      <WindowOverlay goBack={goBackToBoard}>
        <div className="quick-card-editor-card">
          {/* <ListCardQuickEdit currCard={currCard} /> */}
          <ListCardContent
            currCard={currCard}
            currBoard={board}
            currList={currList}
            elPos={elPos}
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
