import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { PopoverCmp } from "../popovers/popover-cmp";
// import { LoaderCmp } from "../loader-cmp";

import { utilService } from "../../services/util.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverMove = ({ elPos, handleClose, currCard, board, mod }) => {
  const boards = useSelector((state) => state.boardReducer.boards);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const [currList, setCurrList] = useState(null);
  const [boardDestination, setBoardDestination] = useState(null);
  const [listDestination, setListDestination] = useState(null);
  const [cardDestination, setCardDestination] = useState(null);

  useEffect(() => {
    if (board) setBoardDestination(board);
    if (currCard) {
      board.lists.forEach((list) => {
        list.cards.forEach((card) => {
          if (card.id === currCard.id) {
            setCurrList(list);
            setListDestination(list);
            setCardDestination(card);
          }
        });
      });
    }
  }, [board, currCard]);

  useEffect(() => {
    if (boardDestination) {
      if (boardDestination._id === board._id) {
        setListDestination(currList);
      } else {
        setListDestination(boardDestination.lists[0]);
      }
    }
  }, [boardDestination, currList, board._id]);

  useEffect(() => {
    if (listDestination && currList) {
      if (listDestination.id === currList.id) {
        setCardDestination(currCard);
      } else {
        setCardDestination(listDestination.cards[0]);
      }
    }
  }, [listDestination, currList, currCard]);

  const handleBoardChange = ({ target }) => {
    const { value } = target;
    const board = boards.find((boardItem) => boardItem._id === value);
    setBoardDestination(board);
  };

  const handleListChange = ({ target }) => {
    const { value } = target;
    const board = boards.find(
      (boardItem) => boardItem._id === boardDestination._id
    );
    const list = board.lists.find((listItem) => listItem.id === value);
    setListDestination(list);
  };

  const handlePosChange = ({ target }) => {
    const { value } = target;
    const card = listDestination.cards.find(
      (catdItem) => catdItem.id === value
    );
    setCardDestination(card);
  };

  const getCardPos = (card) => {
    let cardIdx = listDestination.cards.findIndex(
      (cardItem) => cardItem.id === card.id
    );
    return cardIdx;
  };

  const onMoveCard = async () => {
    const clonedBoard = await _.cloneDeep(board);
    const clonedCard = await _.cloneDeep(currCard);
    // const clonedBoard = await { ...board };
    // const clonedBoard = JSON.parse(JSON.stringify(board));

    clonedBoard.lists.forEach((list) => {
      if (list.id === currList.id) {
        list.cards.forEach((card, idx) => {
          if (card.id === currCard.id) list.cards.splice(idx, 1);
        });
      }
      if (list.id === listDestination.id) {
        list.cards.splice(getCardPos(cardDestination), 0, clonedCard);
      }
    });
    dispatch(onEditBoard(clonedBoard));
    dispatch(closePopover());

    let newPathname = pathname.substring(1).split("/");
    newPathname[2] = listDestination.id;
    newPathname = newPathname.join("/");
    navigate(`/${newPathname}`);
  };

  const onCopyCard = async () => {
    const clonedBoard = await _.cloneDeep(board);
    const clonedCard = await _.cloneDeep(currCard);
    clonedCard.id = utilService.makeId();

    clonedBoard.lists.forEach((list) => {
      if (list.id === listDestination.id) {
        list.cards.splice(getCardPos(cardDestination), 0, clonedCard);
      }
    });
    dispatch(onEditBoard(clonedBoard));
    dispatch(closePopover());
  };

  const getTitle = () => {
    if (mod) {
      if (mod === "move") return "Move";
      else if (mod === "copy") return "Copy";
    }
  };

  //   if (!boards.length || !boardDestination) return <LoaderCmp mod={"medium"} />;

  if (!boards.length || !boardDestination || !listDestination)
    return <div></div>;
  return (
    <PopoverCmp
      title={`${getTitle()} card`}
      handleClose={handleClose}
      elPos={elPos}
    >
      <div className="popover-move-content">
        <h4 className="move-header">Select destination</h4>

        <div className="form-grid">
          <div className="btn btn-sub setting form-grid-child form-grid-child-full">
            <span className="label">Board</span>
            <span className="value">{boardDestination.title}</span>

            <label htmlFor="move-board-select">Board</label>
            <select
              className="select-board"
              id="move-board-select"
              onChange={handleBoardChange}
            >
              <optgroup label="Main Workspace">
                {boards.map((boardItem) => (
                  <option key={boardItem._id} value={boardItem._id}>
                    {`${boardItem.title} ${
                      boardItem._id === board._id ? "(current)" : ""
                    }`}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="btn btn-sub setting form-grid-child form-grid-child-threequarters">
            <span className="label">List</span>
            <span className="value">{listDestination.title}</span>

            <label htmlFor="move-list-select">List</label>
            <select
              className="select-list"
              id="move-list-select"
              onChange={handleListChange}
            >
              <optgroup>
                {boardDestination.lists.map((listItem) => (
                  <option key={listItem.id} value={listItem.id}>
                    {`${listItem.title} ${
                      listItem.id === currList.id ? "(current)" : ""
                    }`}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="btn btn-sub setting form-grid-child">
            <span className="label">Position</span>
            <span className="value">{getCardPos(cardDestination) + 1}</span>

            <label htmlFor="move-pos-select">Position</label>
            <select
              className="select-position"
              id="move-position-select"
              onChange={handlePosChange}
            >
              <optgroup>
                {listDestination.cards.map((cardItem) => (
                  <option key={cardItem.id} value={cardItem.id}>
                    {`${getCardPos(cardItem) + 1} ${
                      cardItem.id === currCard.id ? "(current)" : ""
                    }`}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {mod === "move" && (
          <button className="btn btn-primary wide" onClick={onMoveCard}>
            Move
          </button>
        )}

        {mod === "copy" && (
          <button className="btn btn-primary wide" onClick={onCopyCard}>
            Create card
          </button>
        )}
      </div>
    </PopoverCmp>
  );
};
