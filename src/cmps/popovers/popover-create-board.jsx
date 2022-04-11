import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PopoverCmp } from "./popover-cmp";
import { ReactComponent as BoardDemo } from "../../assets/img/backgrounds/board-demo.svg";
import { ReactComponent as CheckIcon } from "../../assets/img/icons/check-icon.svg";

import { boardService } from "../../services/board.service";
import { userService } from "../../services/user.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverCreateBoard = ({ elPos, handleClose }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardCover, setBoardCover] = useState({ cover: "", id: "" });
  const [isCoverImg, setIsCoverImg] = useState(true);

  const images = useMemo(
    () => [
      {
        cover:
          "https://images.unsplash.com/photo-1649355019584-bc0112fda698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjQ5NjgxNTQ0&ixlib=rb-1.2.1&q=80&w=400",
        id: "g05k",
      },
      {
        cover:
          "https://images.unsplash.com/photo-1649290273851-d4536b14da7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjQ5NjgxNTQ0&ixlib=rb-1.2.1&q=80&w=400",
        id: "39gl",
      },
      {
        cover:
          "https://images.unsplash.com/photo-1649321373260-94b8f9ac1073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjQ5NjgxNTQ0&ixlib=rb-1.2.1&q=80&w=400",
        id: "50av",
      },
      {
        cover:
          "https://images.unsplash.com/photo-1649274762170-d4c30bbee4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjQ5NjgxNTQ0&ixlib=rb-1.2.1&q=80&w=400",
        id: "5vc7",
      },
    ],
    []
  );

  useEffect(() => {
    if (images) {
      setBoardCover(images[0]);
      setIsCoverImg(true);
    }
  }, [images]);

  const colors = [
    { cover: "#0067A3", id: "c0l3" },
    { cover: "#D29034", id: "d2d6" },
    { cover: "#519839", id: "40vlh" },
    { cover: "#B04632", id: "d0o2" },
    { cover: "#89609E", id: "2lj9" },
    { cover: "#CD5A91", id: "sh58" },
  ];

  const onBack = () => {
    const popoverProps = {};
    dispatch(openPopover("CREATE", elPos, popoverProps));
  };

  const handleChange = ({ target }) => {
    const value = target.value;
    setBoardTitle(value);
  };

  const onSetBoardCover = (mod, cover) => {
    if (mod === "img") {
      setBoardCover(cover);
      setIsCoverImg(true);
    } else if (mod === "color") {
      setBoardCover(cover);
      setIsCoverImg(false);
    }
  };

  const getCoverStyle = () => {
    return isCoverImg
      ? {
          backgroundColor: "rgb(0, 121, 191)",
          backgroundImage: `url(${boardCover.cover})`,
        }
      : {
          backgroundColor: `${boardCover.cover}`,
        };
  };

  const onCreateBoard = (ev) => {
    ev.preventDefault();
    const loggedinUser = userService.getLoggedinUser();
    const boardToAdd = boardService.getEmptyBoard(
      boardTitle,
      boardCover.cover,
      isCoverImg,
      loggedinUser
    );

    dispatch(onEditBoard(boardToAdd));
    dispatch(dispatch(closePopover));
    navigate(`/board/${board._id}`);
  };

  if (!boardCover) return <div></div>;
  return (
    <PopoverCmp
      title={"Create board"}
      handleClose={handleClose}
      elPos={elPos}
      onBack={onBack}
    >
      <div className="popover-create-board-content">
        <div className="image-header flex justify-center">
          <div style={getCoverStyle()}>
            <BoardDemo />
          </div>
        </div>

        <div className="backgrounds-container">
          <label htmlFor="bg-picker">Background</label>

          <div className="background-picker">
            <ul className="img-list clean-list flex space-between">
              {images.map((img) => {
                return (
                  <li key={img.id} className="img-item">
                    <button
                      className="btn"
                      style={{ backgroundImage: `url(${img.cover})` }}
                      onClick={() => onSetBoardCover("img", img)}
                    >
                      {boardCover.id === img.id && (
                        <span>
                          <span>
                            <CheckIcon />
                          </span>
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <ul className="color-list clean-list flex space-between">
              {colors.map((color) => {
                return (
                  <li key={color.id} className="color-item">
                    <button
                      className="btn"
                      style={{ backgroundColor: `${color.cover}` }}
                      onClick={() => onSetBoardCover("color", color)}
                    >
                      {boardCover.id === color.id && (
                        <span>
                          <span>
                            <CheckIcon />
                          </span>
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <form>
          <label htmlFor="board-title">
            <div>
              Board title<span></span>*
            </div>
          </label>

          <input
            id="board-title"
            type="text"
            name="title"
            placeholder=""
            value={boardTitle}
            onChange={handleChange}
            autoFocus
            // onFocus={handleFocus}
          />

          <div className="required-label flex">
            <span>👋</span>
            <p>Board title is required</p>
          </div>

          <button
            className={`btn-create btn btn-primary ${
              boardTitle !== "" ? "" : "disabled"
            }`}
            onClick={onCreateBoard}
          >
            Create
          </button>
        </form>
      </div>
    </PopoverCmp>
  );
};
