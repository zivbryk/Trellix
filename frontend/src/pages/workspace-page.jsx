import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadBoards } from "../store/actions/board.actions";
import { LoaderCmp } from "../cmps/loader-cmp";
import { BoardList } from "../cmps/board/board-list";
import underConstruction from "../assets/img/backgrounds/under-construction.png";

export const WorkspacePage = () => {
  const boards = useSelector((state) => state.boardReducer.boards);
  const dispatch = useDispatch();
  const [menuSelection, setMenuSelection] = useState("boards");

  useEffect(() => {
    dispatch(loadBoards());
  }, [dispatch, boards]);

  if (!boards.length) return <LoaderCmp mode={"full-page"} />;

  return (
    <section className="workspace-page flex justify-center">
      <div className="workspace-left-sidebar">
        <ul className="clean-list">
          <li
            onClick={() => {
              setMenuSelection("boards");
            }}
          >
            <div className={`${menuSelection === "boards" ? "selected" : ""}`}>
              <span>
                <span>
                  <span className="trl icon-sm icon-board"></span>
                </span>
              </span>
              <span>Boards</span>
            </div>
          </li>

          <li
            onClick={() => {
              setMenuSelection("templates");
            }}
          >
            <div
              className={`${menuSelection === "templates" ? "selected" : ""}`}
            >
              <span>
                <span>
                  <span className="trl icon-sm icon-template-board"></span>
                </span>
              </span>

              <span>Templates</span>
            </div>
          </li>

          <li
            onClick={() => {
              setMenuSelection("home");
            }}
          >
            <div className={`${menuSelection === "home" ? "selected" : ""}`}>
              <span className="trl icon-sm icon-home"></span>
              <span>Home</span>
            </div>
          </li>
        </ul>
      </div>

      {menuSelection === "boards" && (
        <div className="all-boards flex column">
          <div className="starred-boards flex">
            <div className="starred-boards-header flex">
              <div>
                <span className="trl icon-star icon-lg"></span>
              </div>
              <h3>Starred boards</h3>
            </div>
          </div>
          <BoardList
            boards={boards}
            filterBy={"isStarred"}
            isStarredContainer={true}
          />

          <div className="workspace-boards">
            <h3>YOUR WORKSPACE</h3>
            <BoardList boards={boards} />
          </div>
        </div>
      )}

      {menuSelection === "templates" && (
        <div className="all-boards flex column">
          <img
            className=""
            src={underConstruction}
            alt={"Under Construction"}
          />
        </div>
      )}

      {menuSelection === "home" && (
        <div className="all-boards flex column">
          <img
            className=""
            src={underConstruction}
            alt={"Under Construction"}
          />
        </div>
      )}
    </section>
  );
};
