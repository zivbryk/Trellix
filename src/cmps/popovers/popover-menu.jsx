// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import _ from "lodash";
import { PopoverCmp } from "../popovers/popover-cmp";
// import { LoaderCmp } from "../loader-cmp";

// import { utilService } from "../../services/util.service";
// import { onEditBoard } from "../../store/actions/board.actions";
// import { closePopover } from "../../store/actions/app.actions";

export const PopoverMenu = ({ elPos, handleClose, board, mod }) => {
  //   const boards = useSelector((state) => state.boardReducer.boards);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const pathname = useLocation().pathname;
  //   const [currList, setCurrList] = useState(null);
  //   const [boardDestination, setBoardDestination] = useState(null);
  //   const [listDestination, setListDestination] = useState(null);
  //   const [cardDestination, setCardDestination] = useState(null);

  //   useEffect(() => {
  //     if (board) setBoardDestination(board);
  //     if (currCard) {
  //       board.lists.forEach((list) => {
  //         list.cards.forEach((card) => {
  //           if (card.id === currCard.id) {
  //             setCurrList(list);
  //             setListDestination(list);
  //             setCardDestination(card);
  //           }
  //         });
  //       });
  //     }
  //   }, [board, currCard]);

  //   const handleBoardChange = ({ target }) => {
  //     const { value } = target;
  //     const board = boards.find((boardItem) => boardItem._id === value);
  //     setBoardDestination(board);
  //   };

  //   const onMoveCard = async () => {
  //     const clonedBoard = await _.cloneDeep(board);
  //     const clonedCard = await _.cloneDeep(currCard);
  //     clonedBoard.lists.forEach((list) => {
  //       if (list.id === currList.id) {
  //         list.cards.forEach((card, idx) => {
  //           if (card.id === currCard.id) list.cards.splice(idx, 1);
  //         });
  //       }
  //       if (list.id === listDestination.id) {
  //         list.cards.splice(getCardPos(cardDestination), 0, clonedCard);
  //       }
  //     });
  //     dispatch(onEditBoard(clonedBoard));
  //     dispatch(closePopover());

  //     let newPathname = pathname.substring(1).split("/");
  //     newPathname[2] = listDestination.id;
  //     newPathname = newPathname.join("/");
  //     navigate(`/${newPathname}`);
  //   };

  if (!board) return <div></div>;
  return (
    <PopoverCmp
      title="Menu"
      handleClose={handleClose}
      elPos={elPos}
      mod={"menu"}
    >
      <div className="popover-menu-content">
        <h1>{window.innerWidth}</h1>
      </div>
    </PopoverCmp>
  );
};
