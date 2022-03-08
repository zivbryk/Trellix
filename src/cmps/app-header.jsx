import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as BoardsIcon } from "../assets/img/icons/boards.svg";
import BoardsAnimation from "../assets/img/animations/trello-logo-loader.gif";
import { UserMsg } from "../cmps/user-msg";
import { MemberAvatar } from "./member-avatar";
import { openPopover } from "../store/actions/app.actions";

export const AppHeader = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;

  function getStyle() {
    if (pathname.includes("/workspace")) {
      const style = { background: "#026AA7" };
      return style;
    }
    return null;
  }

  const onOpenPopver = (ev, popoverName, loggedinUser) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { loggedinUser, isInCard: false };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  const getloggedinUser = () => {
    return {
      _id: "u101",
      fullname: "Ziv Bryk",
      username: "zivbryk",
      email: "ziv.bryk@gmail.com",
      imgUrl:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1633516871/Trellis%20permanent%20img/Avatars/ziv_f4seir.png",
      isAdmin: true,
    };
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
            <button className="btn btn-header btn-header-wide flex align-center">
              <span>Workspace</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>

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
          <button className="btn btn-header flex">
            <span className="trl icon-bell icon-md"></span>
          </button>

          <MemberAvatar
            size={"32"}
            member={getloggedinUser()}
            isBadge={false}
            onOpenPopver={onOpenPopver}
            isInAppHeader={true}
          />
        </nav>
      </header>
      <UserMsg />
    </>
  );
};
