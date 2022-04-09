// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";

import { AppHeader } from "./cmps/app-header";
import { DynamicPopover } from "./cmps/popovers/dynamic-popover";

// import { loadUsers } from "./store/actions/user.actions";
import routes from "./routes";

export const RootCmp = () => {
  // const dispatch = useDispatch();
  // dispatch(loadUsers());

  const board = useSelector((state) => state.boardReducer.board);
  const pathname = useLocation().pathname;

  function getBgcStyle() {
    if (!pathname.includes("/board")) return {};

    const bgcStyle = board
      ? {
          background: `${
            board.style.isImage
              ? `url(${board.style.cover}) center center / cover`
              : `${board.style.cover}`
          }`,
        }
      : { background: "#ffffff" };
    return bgcStyle;
  }

  function getIsBoardOrWorkspace() {
    return pathname.includes("board") || pathname.includes("workspace");
  }

  return (
    <section className="root-cmp flex column" style={getBgcStyle()}>
      {getIsBoardOrWorkspace() && <AppHeader />}

      <main className="flex column">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              element={route.element}
              path={route.path}
            />
          ))}
        </Routes>
        <DynamicPopover />
      </main>
    </section>
  );
};
