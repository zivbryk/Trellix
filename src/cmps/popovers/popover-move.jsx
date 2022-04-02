import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";
// import { LoaderCmp } from "../loader-cmp";

// import { boardService } from "../../services/board.service";
// import { utilService } from "../../services/util.service";
// import { onEditBoard } from "../../store/actions/board.actions";
// import { closePopover } from "../../store/actions/app.actions";

export const PopoverMove = ({ elPos, handleClose, currCard, board }) => {
  const boards = useSelector((state) => state.boardReducer.boards);
  //   const dispatch = useDispatch();
  const [boardDestination, setBoardDestination] = useState(null);
  const [listDestination, setListDestination] = useState(null);
  const [posDestination, setPosDestination] = useState(null);

  useEffect(() => {
    if (board) {
      setBoardDestination(board);
    }
  }, [board]);

  useEffect(() => {
    if (boardDestination) {
      const searchedListArr = boardDestination.lists.filter((list) => {
        const isCardInList = list.cards.some((card) => card.id === currCard.id);
        return isCardInList;
      });
      setListDestination(searchedListArr[0]);
    }
  }, [boardDestination, currCard.id]);

  useEffect(() => {
    if (listDestination) {
      const cardIdx = listDestination.cards.findIndex(
        (card) => card.id === currCard.id
      );
      setPosDestination(cardIdx);
    }
  }, [listDestination, currCard.id]);

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
    const card = listDestination.cards.find((catdItem, idx) => idx === value);
    setPosDestination(card);
  };

  //   const getBoardTitle = () => {
  //     const searchedBoard = boards.find(
  //       (currBoard) => currBoard._id === boardDestination
  //     );
  //     return searchedBoard.title;
  //   };

  //   const getListTitle = () => {
  //     const searchedBoard = boards.find(
  //       (currBoard) => currBoard._id === boardDestination
  //     );
  //     console.log("getListTitle => searchedBoard", searchedBoard);
  //     const searchedList = searchedBoard.lists.find(
  //       (currList) => currList.id === listDestination
  //     );
  //     console.log("getListTitle => searchedList", searchedList);
  //     return searchedList.title;
  //   };

  //   const getBoardById = (boardId) => {
  //     return boards.find((board) => board._id === boardId);
  //   };

  const onMoveCard = () => {
    // const newChecklist = {
    //   id: utilService.makeId(),
    //   title: checklistTitle,
    //   todos: [],
    // };
    // const updatedCard = { ...currCard };
    // updatedCard.checklists.push(newChecklist);
    // const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    // dispatch(onEditBoard(updatedBoard));
    // dispatch(closePopover());
  };

  //   if (!boards.length || !boardDestination) return <LoaderCmp mod={"medium"} />;
  //   console.log("boards:", boards);
  //   console.log("boardDestination:", boardDestination);
  if (!boards.length || !boardDestination || !listDestination)
    return <div></div>;
  return (
    <PopoverCmp title="Move card" handleClose={handleClose} elPos={elPos}>
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
              value={boardDestination.title}
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
              value={listDestination.title}
            >
              <optgroup>
                {boardDestination.lists.map((listItem) => (
                  <option key={listItem.id} value={listItem.id}>
                    {`${listItem.title} ${
                      listItem.id === listDestination.id ? "(current)" : ""
                    }`}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="btn btn-sub setting form-grid-child">
            <span className="label">Position</span>
            <span className="value">{posDestination + 1}</span>

            <label htmlFor="move-pos-select">Position</label>
            <select
              className="select-position"
              id="move-position-select"
              onChange={handlePosChange}
              value={posDestination}
            >
              <optgroup>
                {listDestination.cards.map((cardItem, idx) => (
                  <option key={cardItem.id} value={idx}>
                    {`${idx + 1} ${idx === posDestination ? "(current)" : ""}`}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <button className="btn btn-primary wide" onClick={onMoveCard}>
          Move
        </button>
      </div>
    </PopoverCmp>
  );
};
