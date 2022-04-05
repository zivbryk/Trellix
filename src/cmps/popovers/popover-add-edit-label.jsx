import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { PopoverCmp } from "./popover-cmp";
import { ColorPalette } from "../popovers/color-palette.jsx";

// import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";
import { utilService } from "../../services/util.service";

export const PopoverAddEditLabel = ({
  elPos,
  handleClose,
  currCard,
  board,
  selectedLabel,
}) => {
  const dispatch = useDispatch();
  const [label, setLabel] = useState({
    id: "",
    title: "",
    color: "",
    isSelected: false,
  });
  //   const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    if (selectedLabel) setLabel(selectedLabel);
  }, [selectedLabel]);

  const handleFocus = (ev) => {
    ev.target.select();
  };

  const onBack = () => {
    const popoverProps = { currCard, board, elPos };
    dispatch(openPopover("LABELS", elPos, popoverProps));
  };

  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    setLabel({ ...label, [field]: value });
  };

  const onSetColor = (colorName) => {
    setLabel({ ...label, color: colorName });
  };

  const onSaveLabel = () => {
    const clonedBoard = _.cloneDeep(board);

    const boardLabelIdx = clonedBoard.labels.findIndex(
      (boardLabel) => boardLabel.id === label.id
    );
    if (boardLabelIdx !== -1) {
      clonedBoard.labels.splice(boardLabelIdx, 1, label);
    } else {
      const updatedLabel = { ...label };
      updatedLabel.id = utilService.makeId();
      setLabel(updatedLabel);
      clonedBoard.labels.push(updatedLabel);
    }

    dispatch(onEditBoard(clonedBoard));
    const popoverProps = { currCard, board: clonedBoard, elPos };
    dispatch(openPopover("LABELS", elPos, popoverProps));
  };

  const onDeleteLabel = () => {
    const clonedBoard = _.cloneDeep(board);
    const updatedCard = { ...currCard };
    const cardLabelIdx = updatedCard.labelIds.findIndex(
      (labelId) => labelId === label.id
    );
    updatedCard.labelIds.splice(cardLabelIdx, 1);

    const boardLabelIdx = clonedBoard.labels.findIndex(
      (boardLabel) => boardLabel.id === label.id
    );
    clonedBoard.labels.splice(boardLabelIdx, 1);

    dispatch(onEditBoard(clonedBoard));
    const popoverProps = { currCard: updatedCard, board: clonedBoard, elPos };
    dispatch(openPopover("LABELS", elPos, popoverProps));
  };

  return (
    <PopoverCmp
      title={selectedLabel ? "Change label" : "Create label"}
      handleClose={handleClose}
      elPos={elPos}
      onBack={onBack}
    >
      <div className="popover-add-edit-label-content">
        <label htmlFor="label-title">Name</label>
        <input
          id="label-title"
          type="text"
          name="title"
          placeholder=""
          value={label.title}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
        />

        <label>Select a color</label>
        <ColorPalette onSetColor={onSetColor} label={label} mod="edit-label" />

        <div className="control-btns flex space-between">
          <button
            className="btn-save btn btn-primary wide"
            onClick={onSaveLabel}
          >
            Save
          </button>
          <button className="btn-delete btn btn-danger" onClick={onDeleteLabel}>
            Delete
          </button>
        </div>
      </div>
    </PopoverCmp>
  );
};
