import { useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as BoardsIcon } from "../assets/img/icons/boards.svg";
import { ReactComponent as BellIcon } from "../assets/img/icons/bell.svg";
import BoardsAnimation from "../assets/img/animations/trello-logo-loader.gif";
import { UserMsg } from "../cmps/user-msg";
import { MemberAvatar } from "./member-avatar";
import { openPopover } from "../store/actions/app.actions";

export const AppHeader = () => {
  const loggedInUser = useSelector((state) => state.userReducer.loggedInUser);

  const dispatch = useDispatch();
  const pathname = useLocation().pathname;

  function getStyle() {
    if (pathname.includes("/workspace")) {
      const style = { background: "#026AA7" };
      return style;
    }
    return null;
  }

  const onOpenPopover = (ev, popoverName, loggedInUser) => {
    const elPos = ev.target.getBoundingClientRect();
    let popoverProps = {};
    if (popoverName === "ACCOUNT") {
      popoverProps = { loggedInUser, isInCard: false };
    } else if (popoverName === "CREATE") {
      popoverProps = {};
    } else if (popoverName === "STARRED-BOARDS") {
      popoverProps = {};
    } else if (popoverName === "NOTIFICATIONS") {
      popoverProps = {};
    } else {
      popoverProps = {};
    }

    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <>
      <header
        className="app-header flex space-between align-center"
        style={getStyle()}
      >
        <nav className="left-pane flex">
          <NavLink to={"/"} className="header-logo flex align-center">
            <div>
              <BoardsIcon />
              <span className="">Trellix</span>
            </div>

            <div>
              <img src={BoardsAnimation} alt="animated logo" />
              <span className="">Trellix</span>
            </div>
          </NavLink>

          <div className="desktop-actions flex">
            <NavLink
              to={"/workspace"}
              className="btn-workspaces flex align-center"
            >
              <button className="btn btn-header btn-header-wide flex align-center">
                <span>Workspace</span>
                <span className="trl icon-chevron-down icon-sm"></span>
              </button>
            </NavLink>

            <button
              className="btn btn-header btn-header-wide flex align-center"
              onClick={(ev) => onOpenPopover(ev, "STARRED-BOARDS")}
            >
              <span>Starred</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>

            <button
              className="btn btn-header btn-header-wide flex align-center"
              onClick={(ev) => onOpenPopover(ev, "CREATE")}
            >
              <span>Create</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>
          </div>

          <div className="mobile-actions">
            <button
              className="btn btn-header btn-header-wide flex align-center"
              onClick={(ev) => onOpenPopover(ev, "MORE")}
            >
              <span>More</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>
          </div>
        </nav>

        <nav className="right-pane flex align-center">
          <button
            className="btn btn-header flex align-center"
            onClick={(ev) => onOpenPopover(ev, "NOTIFICATIONS")}
          >
            <span>
              <span>
                <BellIcon />
              </span>
            </span>
          </button>

          <MemberAvatar
            size={"32"}
            member={loggedInUser}
            isBadge={false}
            onOpenPopover={onOpenPopover}
            isInAppHeader={true}
          />
        </nav>
      </header>
      <UserMsg />
    </>
  );
};
