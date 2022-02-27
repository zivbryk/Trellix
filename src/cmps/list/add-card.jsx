import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const AddCard = ({ toggleAddingCard }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();

  const [titleTxt, setTitleTxt] = useState("");

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    if (ev.key === "Enter") {
      onAddCard(ev);
      return;
    }
    setTitleTxt(value);
  };

  const onAddCard = (ev) => {
    console.log("adding card!!");
    //   ev.preventDefault();
    //   if (!listTitle) {
    //     titleInput.current.focus();
    //     return;
    //   }

    //   const clonedBoard = _.cloneDeep(board);
    //   const newList = {
    //     id: utilService.makeId(),
    //     title: listTitle,
    //     cards: [],
    //   };
    //   clonedBoard.lists.push(newList);

    //   setListTitle("");
    //   dispatch(onEditBoard(clonedBoard));
  };

  return (
    <div className="add-card">
      <div className="list-card-content">
        <div className="add-card-details">
          <textarea
            dir="auto"
            placeholder="Enter a title for this card…"
            value={titleTxt}
            onChange={handleTitleChange}
            onKeyDown={handleTitleChange}
            autoFocus
          ></textarea>
        </div>
      </div>

      <div className="add-card-controls">
        <div>
          <button
            //   id="add-list-btn"
            className="btn btn-primary"
            //   onClick={onAddList}
          >
            Add card
          </button>

          <span
            className="trl icon-close icon-lg"
            onClick={toggleAddingCard}
          ></span>
        </div>
      </div>
    </div>
  );
};
