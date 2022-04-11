import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";

import { openPopover } from "../../store/actions/app.actions";

export const PopoverMenu = ({ elPos, handleClose, board }) => {
  const dispatch = useDispatch();

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { board };
    dispatch(openPopover(popoverName, elPos, popoverProps));
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

          {/* <li className="menu-nav-item">
            <button className="btn menu-nav-item-link">
              <span className="item-link-icon trl icon-label icon-sm"></span>
              &nbsp;Labels
            </button>
          </li> */}

          <li className="menu-nav-item">
            <button
              className="btn menu-nav-item-link"
              onClick={(ev) => onOpenPopover(ev, "ARCHIVE")}
            >
              <span className="item-link-icon trl icon-archive icon-sm"></span>
              &nbsp;Archived items
            </button>
          </li>

          {/* <li className="menu-nav-item">
            <button className="btn menu-nav-item-link">
              <span className="item-link-icon trl icon-search icon-sm"></span>
              &nbsp;Search cards
            </button>
          </li> */}
        </ul>
      </div>
    </PopoverCmp>
  );
};
