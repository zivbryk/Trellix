import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useState } from "react";

// import { ReactComponent as BoardIcon } from "../../assets/img/icons/board-icon.svg";
import { WindowOverlay } from "../window-overlay";
import { ListCardQuickEdit } from "../list/list-card-quick-edit";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverQuickCardEditor = ({
  currCard,
  elPos,
  handleClose,
  mod,
}) => {
  // const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();
  const [btnMenuRight] = useState(true);
  // const onOpenPopover = (ev, popoverName) => {
  //   const popoverProps = {};
  //   dispatch(openPopover(popoverName, elPos, popoverProps));
  // };

  // const onBack = () => {
  //   let popoverProps = {};
  //   dispatch(openPopover("MORE", elPos, popoverProps));
  // };

  const goBackToBoard = (ev) => {
    ev.stopPropagation();
    dispatch(closePopover());
  };

  return (
    <section className="quick-card-editor">
      <WindowOverlay goBack={goBackToBoard}>
        <div className="quick-card-editor-card">
          <ListCardQuickEdit currCard={currCard} />
          {/* <div className="list-card-quick-edit"></div> */}
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
