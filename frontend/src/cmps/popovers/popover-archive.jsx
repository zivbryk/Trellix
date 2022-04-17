import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { PopoverCmp } from "./popover-cmp";
import { Spinner } from "../spinner";
import { ListCardContent } from "../list/list-card-content";

import { openPopover } from "../../store/actions/app.actions";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverArchive = ({ elPos, handleClose }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [isLoading] = useState(false);
  const [archivedCardsList, setArchivedCardsList] = useState([]);

  useEffect(() => {
    const allArchivedCards = board.lists.reduce((perBoardAcc, list) => {
      const archivedCardsPerList = list.cards.reduce((perListAcc, card) => {
        if (card.archiveData.isArchived) perListAcc.push(card);
        return perListAcc;
      }, []);
      perBoardAcc.push(...archivedCardsPerList);
      return perBoardAcc;
    }, []);

    setArchivedCardsList(allArchivedCards);
  }, [board]);

  const onBack = () => {
    const popoverProps = { board, elPos };
    dispatch(openPopover("MENU", elPos, popoverProps));
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setKeyword(value);
  };

  const getListOfCurrCard = (cardId) => {
    let searchedList = {};
    board.lists.forEach((list) => {
      list.cards.forEach((card) => {
        if (card.id === cardId) searchedList = { ...list };
      });
    });

    return searchedList;
  };

  const onSendCardToBoard = (cardId) => {
    const targetList = getListOfCurrCard(cardId);
    const clonedBoard = _.cloneDeep(board);

    clonedBoard.lists.forEach((list) => {
      if (list.id === targetList.id) {
        list.cards.forEach((card) => {
          if (card.id === cardId) {
            card.archiveData.isArchived = false;
          }
        });
      }
    });

    dispatch(onEditBoard(clonedBoard));
  };

  const onDeleteCard = (cardId) => {
    const targetList = getListOfCurrCard(cardId);
    const clonedBoard = _.cloneDeep(board);

    clonedBoard.lists.forEach((list) => {
      if (list.id === targetList.id) {
        const cardIdx = list.cards.findIndex((card) => card.id === cardId);
        list.cards.splice(cardIdx, 1);
      }
    });
    dispatch(onEditBoard(clonedBoard));
  };

  if (!board) return <div></div>;
  return (
    <PopoverCmp
      title="Archive"
      handleClose={handleClose}
      elPos={elPos}
      mod={"menu"}
      onBack={onBack}
      menuType={""}
    >
      <div className="popover-archive-content">
        <div className="archive-controls flex align-start">
          <div className="archive-search">
            <input
              type="text"
              placeholder="Search archive"
              value={keyword}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-popover">Switch to lists</button>
        </div>

        {isLoading && <Spinner mode={"loading"} />}

        <div className="archive-content">
          <div className="archive-items">
            {archivedCardsList.map((archivedCard) => (
              <div key={archivedCard.id} className="archived-list-card">
                <ListCardContent
                  currBoard={board}
                  currList={getListOfCurrCard(archivedCard.id)}
                  currCard={archivedCard}
                />

                <p className="controls quiet">
                  <button
                    className="btn"
                    onClick={() => onSendCardToBoard(archivedCard.id)}
                  >
                    Send to board
                  </button>
                  <span> - </span>
                  <button
                    className="btn"
                    onClick={() => onDeleteCard(archivedCard.id)}
                  >
                    {" "}
                    Delete
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PopoverCmp>
  );
};
