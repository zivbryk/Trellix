// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "./popover-cmp";
import { ReactComponent as BoardIcon } from "../../assets/img/icons/board-icon.svg";

// import { boardService } from "../../services/board.service";
// import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const PopoverCreate = ({ elPos, handleClose }) => {
  const dispatch = useDispatch();
  // const [filterBy, setFilterBy] = useState({ txt: "" });
  // const [filteredLabels, setFilteredLabels] = useState([]);

  // useEffect(() => {
  //   setFilteredLabels(board.labels);
  // }, [board]);

  const onOpenPopover = (ev, popoverName) => {
    // const elPos = ev.target.getBoundingClientRect();
    const popoverProps = {};
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <PopoverCmp title="Create" handleClose={handleClose} elPos={elPos}>
      <div className="popover-create-content">
        <nav>
          <ul className="clean-list">
            <li>
              <button
                className="btn"
                onClick={(ev) => onOpenPopover(ev, "CREATE-BOARD")}
              >
                <span>
                  <span>
                    <BoardIcon />
                  </span>
                </span>

                <span>Create board</span>

                <p>
                  A board is made up of cards ordered on lists. Use it to manage
                  projects, track information, or organize anything.
                </p>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </PopoverCmp>
  );
};
