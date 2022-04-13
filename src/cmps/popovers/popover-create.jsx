import { useDispatch } from "react-redux";
import { PopoverCmp } from "./popover-cmp";
import { ReactComponent as BoardIcon } from "../../assets/img/icons/board-icon.svg";

import { openPopover } from "../../store/actions/app.actions";

export const PopoverCreate = ({ elPos, handleClose, mod }) => {
  const dispatch = useDispatch();

  const onOpenPopover = (ev, popoverName) => {
    const popoverProps = {};
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  const onBack = () => {
    let popoverProps = {};
    dispatch(openPopover("MORE", elPos, popoverProps));
  };

  return (
    <PopoverCmp
      title="Create"
      handleClose={handleClose}
      elPos={elPos}
      onBack={mod === "menu" ? onBack : undefined}
    >
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
