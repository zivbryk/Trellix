import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PopoverCmp } from "./popover-cmp";
import { Spinner } from "../spinner";

import { loadBoards } from "../../store/actions/board.actions";

export const PopoverStarredBoards = ({ elPos, handleClose }) => {
  const boards = useSelector((state) => state.boardReducer.boards);
  const loggedInUser = useSelector((state) => state.userReducer.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadBoards());
  }, [dispatch]);

  const onOpenBoard = (board) => {
    navigate(`/board/${board._id}`);
  };

  const getCoverStyle = (boardStyle) => {
    return boardStyle.isImage
      ? {
          backgroundColor: "rgb(0, 121, 191)",
          backgroundImage: `url(${boardStyle.cover})`,
        }
      : {
          backgroundColor: `${boardStyle.cover}`,
        };
  };

  if (!boards) return <Spinner mode={"loading"} />;
  return (
    <PopoverCmp
      title={"Starred Boards"}
      handleClose={handleClose}
      elPos={elPos}
    >
      <div className="popover-starred-boards-content">
        <ul className="clean-list">
          {boards
            .filter((board) => board.isStarred)
            .map((board) => {
              return (
                <li key={board._id} className="flex">
                  <div>
                    <div
                      className="flex"
                      onClick={() => {
                        onOpenBoard(board);
                      }}
                    >
                      <div
                        className="thumbnail-image"
                        style={getCoverStyle(board.style)}
                      ></div>

                      <div className="thumbnail-description">
                        <div className="thumbnail-header">{board.title}</div>
                        <div className="thumbnail-workspace">{`
                      ${loggedInUser.fullname}'s workspace`}</div>
                      </div>

                      <div className="star-container flex align-center">
                        <span className="trl icon-starred icon-sm"></span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </PopoverCmp>
  );
};
