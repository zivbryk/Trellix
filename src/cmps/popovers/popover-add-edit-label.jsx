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
    //   {id: 'tp301', title: '+Design Team', color: 'green', isSelected: true}
    // setLabel({
    //   labelName: selectedLabel.title,
    //   labelColor: selectedLabel.color,
    // });
  }, [selectedLabel]);

  const handleFocus = (ev) => {
    ev.target.select();
  };

  //   useEffect(() => {
  //     const filteredList = board.labels.filter((label) =>
  //       label.title.toLowerCase().includes(filterBy.txt.toLowerCase())
  //     );
  //     setFilteredLabels(filteredList);
  //   }, [filterBy.txt, board.labels]);

  const onBack = () => {
    const popoverProps = { currCard, board, elPos };
    dispatch(openPopover("LABELS", elPos, popoverProps));
  };

  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    // console.log({ ...label, [field]: value });
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

  //   const isCardLabel = (label) => {
  //     const test = currCard.labelIds.find((cardLabel) => cardLabel === label.id);
  //     return currCard.labelIds.find((cardLabel) => cardLabel === label.id);
  //   };

  //   const selectLabel = (label) => {
  //     setSelectedLabel(label);
  //     const updatedList = filteredLabels.map((currLabel) => {
  //       if (currLabel.id === label.id) {
  //         currLabel.isSelected = true;
  //         return currLabel;
  //       } else {
  //         currLabel.isSelected = false;
  //         return currLabel;
  //       }
  //     });
  //     setFilteredLabels(updatedList);
  //   };

  //   const toggleLabel = (boardLabel, boardLabelIdx) => {
  //     const updatedCard = { ...currCard };
  //     const cardLabelIdx = updatedCard.labelIds.findIndex(
  //       (cardLabel) => cardLabel === boardLabel.id
  //     );
  //     if (cardLabelIdx !== -1) updatedCard.labelIds.splice(cardLabelIdx, 1);
  //     else {
  //       // updatedCard.labelIds.unshift(boardLabel.id);
  //       updatedCard.labelIds.splice(boardLabelIdx, 0, boardLabel.id);
  //     }
  //     const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
  //     dispatch(onEditBoard(updatedBoard));
  //   };

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
        {/* <div className="labels-container">
          <h4>Labels</h4>
          <ul className="edit-labels clean-list">
            {filteredLabels.map((label, idx) => {
              return (
                <li key={label.id} onMouseOver={() => selectLabel(label)}>
                  <button className="btn btn-label-edit">
                    <span className="trl icon-edit icon-sm"></span>
                  </button>

                  <span
                    className={`card-label card-label-${label.color} ${
                      label.isSelected ? "selected" : ""
                    }`}
                    onClick={() => toggleLabel(label, idx)}
                  >
                    {label.title}
                    <span
                      className={`icon-sm trl icon-check ${
                        isCardLabel(label) ? "active" : ""
                      }`}
                    ></span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </PopoverCmp>
  );
};
