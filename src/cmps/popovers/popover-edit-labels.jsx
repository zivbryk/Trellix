import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "./popover-cmp";

export const PopoverEditLabels = ({ elPos, handleClose, currCard, board }) => {
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState({ txt: "" });
  const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    setFilteredLabels(board.labels);
  }, [board]);

  useEffect(() => {
    const filteredList = board.labels.filter((label) =>
      label.title.toLowerCase().includes(filterBy.txt.toLowerCase())
    );
    setFilteredLabels(filteredList);
  }, [filterBy.txt, board.labels]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterBy({ txt: value });
  };

  const isCardLabel = (label) => {
    console.log("isCardLabel => label", label.id);
    const test = currCard.labelIds.find((cardLabel) => cardLabel === label.id);
    console.log("isCardLabel => test", test);
    return currCard.labelIds.find((cardLabel) => cardLabel === label.id);
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
            {filteredLabels.map((label) => {
              return (
                <li>
                  <button className="btn btn-label-edit">
                    <span className="trl icon-edit icon-sm"></span>
                  </button>

                  <span className={`card-label card-label-${label.color}`}>
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
        </div>
      </div>
    </PopoverCmp>
  );
};
