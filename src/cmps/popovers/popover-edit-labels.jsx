import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "./popover-cmp";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const PopoverEditLabels = ({ elPos, handleClose, currCard, board }) => {
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState({ txt: "" });
  const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    setFilteredLabels(board.labels);
  }, [board]);

  useEffect(() => {
    if (!board) return;
    const filteredList = board.labels.filter((label) =>
      label.title.toLowerCase().includes(filterBy.txt.toLowerCase())
    );
    setFilteredLabels(filteredList);
  }, [filterBy.txt, board]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterBy({ txt: value });
  };

  const isCardLabel = (label) => {
    return currCard.labelIds.find((cardLabel) => cardLabel === label.id);
  };

  const selectLabel = (label) => {
    const updatedList = filteredLabels.map((currLabel) => {
      if (currLabel.id === label.id) {
        currLabel.isSelected = true;
        return currLabel;
      } else {
        currLabel.isSelected = false;
        return currLabel;
      }
    });
    setFilteredLabels(updatedList);
  };

  // const orderCardLabels = () => {
  //   //TODO: order the card labels according to their order in the boardlabels. search for algorithem in c course slides
  //   //call this func from toggleLabel after inserting the new label to the card's labelIds and reorder the labelIds list
  // };

  const toggleLabel = (boardLabel, boardLabelIdx) => {
    const updatedCard = { ...currCard };
    const cardLabelIdx = updatedCard.labelIds.findIndex(
      (cardLabel) => cardLabel === boardLabel.id
    );
    if (cardLabelIdx !== -1) updatedCard.labelIds.splice(cardLabelIdx, 1);
    else {
      // updatedCard.labelIds.unshift(boardLabel.id);
      updatedCard.labelIds.splice(boardLabelIdx, 0, boardLabel.id);
    }
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onOpenPopover = (ev, popoverName, selectedLabel) => {
    // const elPos = ev.target.getBoundingClientRect();
    const popoverProps = selectedLabel
      ? { selectedLabel, board, currCard }
      : { board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <PopoverCmp title="Labels" handleClose={handleClose} elPos={elPos}>
      <div className="popover-edit-labels-content">
        <input
          type="text"
          placeholder="Search labels"
          value={filterBy.txt}
          onChange={handleChange}
          autoFocus
        />

        <div className="labels-container">
          <h4>Labels</h4>
          <ul className="edit-labels clean-list">
            {filteredLabels.map((label, idx) => {
              return (
                <li key={label.id} onMouseOver={() => selectLabel(label)}>
                  <button
                    className="btn btn-label-edit"
                    onClick={(ev) => {
                      onOpenPopover(ev, "ADD-LABEL", label);
                    }}
                  >
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

          <button
            className="btn btn-popover btn-create-label full"
            onClick={(ev) => {
              onOpenPopover(ev, "ADD-LABEL", null);
            }}
          >
            Create a new label
          </button>
        </div>
      </div>
    </PopoverCmp>
  );
};
