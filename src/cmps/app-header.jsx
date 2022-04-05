import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as BoardsIcon } from "../assets/img/icons/boards.svg";
import { ReactComponent as BellIcon } from "../assets/img/icons/bell.svg";
import BoardsAnimation from "../assets/img/animations/trello-logo-loader.gif";
import { UserMsg } from "../cmps/user-msg";
import { MemberAvatar } from "./member-avatar";
import { openPopover } from "../store/actions/app.actions";
import { onLogin } from "../store/actions/user.actions";

// import { userService } from "../services/user.service";

export const AppHeader = () => {
  const loggedInUser = useSelector((state) => state.userReducer.loggedInUser);

  const dispatch = useDispatch();
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (!loggedInUser) dispatch(onLogin());
  }, [loggedInUser, dispatch]);

  function getStyle() {
    if (pathname.includes("/workspace")) {
      const style = { background: "#026AA7" };
      return style;
    }
    return null;
  }

  const onOpenPopover = (ev, popoverName, loggedInUser) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { loggedInUser, isInCard: false };
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

          <div className="flex">
            <NavLink
              to={"/workspace"}
              className="btn-workspaces flex align-center"
            >
              <button className="btn btn-header btn-header-wide flex align-center">
                <span>Workspace</span>
                <span className="trl icon-chevron-down icon-sm"></span>
              </button>
            </NavLink>

            <button className="btn btn-header btn-header-wide flex align-center">
              <span>Starred</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>

            <button className="btn btn-header btn-header-wide flex align-center">
              <span>Create</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>
          </div>
        </nav>

        <nav className="right-pane flex align-center">
          <button className="btn btn-header flex align-center">
            <span>
              <span>
                <BellIcon />
              </span>
            </span>
            {/* <span className="trl icon-bell icon-md"></span> */}
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
