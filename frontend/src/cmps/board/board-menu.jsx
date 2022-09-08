import { useDispatch } from "react-redux";

import { openPopover, closePopover } from "../../store/actions/app.actions";

export const BoardMenu = ({ board, isShowMenu, onChangeIsShowMenu }) => {
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

  return (
    <section className={`board-menu ${isShowMenu ? "is-show-menu" : "hide"}`}>
      <div className="board-menu-header-content flex align-center ">
        <button className="btn btn-back">
          <span className="trl icon-back icon-lg"></span>
        </button>

        <h3 className="popover-header-title full flex justify-center">Menu</h3>
        <button
          className="btn btn-close"
          onClick={() => {
            onChangeIsShowMenu(false);
          }}
        >
          <span className="trl icon-close icon-lg"></span>
        </button>
      </div>
      <hr className="board-menu-header-divider" />
      <div className="menu-content">
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

          {/* <li className="menu-nav-item">
            <button className="btn menu-nav-item-link">
              <span className="item-link-icon trl icon-search icon-sm"></span>
              &nbsp;Search cards
            </button>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
