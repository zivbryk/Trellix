import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AutosizeInput from "react-input-autosize";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { LoaderCmp } from "../loader-cmp";
import { MemberAvatar } from "../member-avatar";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const BoardHeader = ({ board, onChangeIsShowMenu, isShowMenu }) => {
  const dispatch = useDispatch();
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [title, setTitle] = useState("");
  const h1Title = useRef(null);
  const titleInput = useRef(null);

  useEffect(() => {
    if (isEditTitle) titleInput.current.select();
  }, [isEditTitle]);

  useEffect(() => {
    setTitle(board.title);
  }, [board]);

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    setTitle(value);
  };

  const toggleTitleEdit = () => {
    setIsEditTitle(!isEditTitle);
  };

  const onSaveBoardTitle = (ev) => {
    ev.preventDefault();
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.title = title;
    dispatch(onEditBoard(clonedBoard));
    toggleTitleEdit();
  };

  const toggleStarred = () => {
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.isStarred = !clonedBoard.isStarred;
    dispatch(onEditBoard(clonedBoard));
  };

  const onOpenPopover = (ev, popoverName, member) => {
    const elPos = ev.target.getBoundingClientRect();
    let popoverProps = {};
    member
      ? (popoverProps = { member, isInCard: false })
      : (popoverProps = { board });

    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  if (!board) return <LoaderCmp />;
  return (
    <section className="board-header flex space-between">
      <div className="board-header-left flex">
        <div className="board-title">
          {isEditTitle ? (
            <form onSubmit={onSaveBoardTitle}>
              <AutosizeInput
                className="board-name-input"
                type="text"
                value={title}
                onChange={handleTitleChange}
                onBlur={onSaveBoardTitle}
                autoFocus
                ref={titleInput}
              />
            </form>
          ) : (
            <h1
              className="btn board-header-btn"
              onClick={toggleTitleEdit}
              ref={h1Title}
            >
              {board.title}
            </h1>
          )}
        </div>

        <button
          className="btn board-header-btn btn-star-container"
          title="Click to star or unstar this board."
          onClick={toggleStarred}
        >
          <span
            className={`trl board-header-btn-icon icon-sm ${
              board.isStarred ? "icon-starred" : "icon-star"
            }`}
          ></span>
        </button>

        <span className="board-header-btn-divider"></span>

        <div>
          <div className="board-header-facepile">
            {board.boardMembers
              .filter((member, idx) => idx < 4)
              .map((member, idx) => (
                <MemberAvatar
                  size={"28"}
                  member={member}
                  isBadge={true}
                  idx={board.boardMembers.length - idx}
                  key={member._id}
                  onOpenPopover={onOpenPopover}
                />
              ))}
            <MemberAvatar
              size={"28"}
              isBadge={false}
              txt={board.boardMembers.length - 4}
            />
          </div>

          <button
            className="btn board-header-btn board-header-btn-wide flex align-center btn-add-member"
            onClick={(ev) => {
              onOpenPopover(ev, "INVITE");
            }}
          >
            <span className="trl icon-add-member icon-sm"></span>
            <span>Invite</span>
          </button>
        </div>
      </div>

      <div className="board-header-right flex">
        <Link to={`/board/${board._id}/dashboard`}>
          <button className="btn board-header-btn board-header-btn-wide flex align-center">
            <span className="trl icon-dashboard board-header-btn-icon icon-sm"></span>
            <span className="btn-description">Dashboard</span>
          </button>
        </Link>

        <button
          className="btn board-header-btn board-header-btn-wide flex align-center"
          onClick={(ev) => {
            onOpenPopover(ev, "MENU", null);
          }}
        >
          <span className="trl icon-tri-dots-hor board-header-btn-icon icon-sm"></span>
          <span className="btn-description">Show menu</span>
        </button>
        {!isShowMenu && (
          <button
            className="btn board-header-btn board-header-btn-wide flex align-center"
            onClick={() => {
              onChangeIsShowMenu(true);
            }}
          >
            <span className="trl icon-tri-dots-hor board-header-btn-icon icon-sm"></span>
            <span className="btn-description">Show menu</span>
          </button>
        )}
      </div>
    </section>
  );
};
