import { useDispatch, useSelector } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";

import { openPopover } from "../../store/actions/app.actions";

export const PopoverMenu = ({ elPos, handleClose, board }) => {
  const loggedInUser = useSelector((state) => state.userReducer.loggedInUser);
  const dispatch = useDispatch();

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    let popoverProps;
    if (popoverName === "LABELS") {
      popoverProps = { board, mod: "menu" };
    } else {
      popoverProps = { board };
    }
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  const isLoggedInUserBoardMember = () => {
    return board.boardMembers.some(
      (member) => member.fullname === loggedInUser.fullname
    );
  };

  const isLoggedInUserBoardCreator = () => {
    console.log(
      "isLoggedInUserBoardCreator",
      loggedInUser.fullname === board.createdBy.fullname
    );
    return loggedInUser.fullname === board.createdBy.fullname;
  };

  if (!board) return <div></div>;
  return (
    <PopoverCmp
      title="Menu"
      handleClose={handleClose}
      elPos={elPos}
      mod={"menu"}
    >
      <div className="popover-menu-content">
        <ul className="menu-nav clean-list">
          <li className="menu-nav-item">
            <button
              className="btn menu-nav-item-link"
              onClick={(ev) => onOpenPopover(ev, "CHANGE-BACKGROUND")}
            >
              <span
                className="item-link-icon mod-background"
                style={{ backgroundImage: `url(${board.style.cover})` }}
              ></span>
              &nbsp;Change background
            </button>
          </li>

          <li className="menu-nav-item">
            <button
              className="btn menu-nav-item-link"
              onClick={(ev) => onOpenPopover(ev, "LABELS")}
            >
              <span className="item-link-icon trl icon-label icon-sm"></span>
              &nbsp;Labels
            </button>
          </li>

          <li className="menu-nav-item">
            <button
              className="btn menu-nav-item-link"
              onClick={(ev) => onOpenPopover(ev, "ARCHIVE")}
            >
              <span className="item-link-icon trl icon-archive icon-sm"></span>
              &nbsp;Archived items
            </button>
          </li>

          {isLoggedInUserBoardMember() && (
            <li className="menu-nav-item">
              {isLoggedInUserBoardCreator() && (
                <button
                  className="btn menu-nav-item-link"
                  onClick={(ev) => onOpenPopover(ev, "CLOSE-BOARD")}
                >
                  &nbsp;Close Board ...
                </button>
              )}
              {!isLoggedInUserBoardCreator() && (
                <button
                  className="btn menu-nav-item-link"
                  onClick={(ev) => onOpenPopover(ev, "LEAVE-BOARD")}
                >
                  &nbsp;Leave Board ...
                </button>
              )}
            </li>
          )}
        </ul>
      </div>
    </PopoverCmp>
  );
};
