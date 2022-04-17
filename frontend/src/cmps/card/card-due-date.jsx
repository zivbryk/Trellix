import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ChevronDown } from "../../assets/img/icons/chevron-down.svg";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const CardDueDate = ({ currCard, board }) => {
  const dispatch = useDispatch();

  const [isCardComplete, setIsCardComplete] = useState(false);
  const [due, setDue] = useState(null);

  useEffect(() => {
    if (currCard) {
      setIsCardComplete(currCard.isComplete);
      setDue(currCard.dueDate - Date.now());
    }
  }, [currCard]);

  const getFormatedDueDate = () => {
    if (!currCard.dueDate) return "";
    return (
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(currCard.dueDate) +
      " at " +
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
      }).format(currCard.dueDate)
    );
  };

  const getDueDateTitle = () => {
    if (isCardComplete) {
      return "This card is complete.";
    } else {
      if (due > 0) {
        return due > 24 * 60 * 60 * 1000
          ? "This card is due later."
          : "This card is due in less then twenty-four hours.";
      } else {
        return -1 * due > 24 * 60 * 60 * 1000
          ? "This card is passed due."
          : "This card is recently overdue!";
      }
    }
  };

  const getDueDateStyle = () => {
    if (isCardComplete) {
      return "is-due-complete";
    } else {
      if (due > 0) {
        return due > 24 * 60 * 60 * 1000 ? "" : "is-due-soon";
      } else {
        return -1 * due > 24 * 60 * 60 * 1000 ? "is-due-past" : "is-due-now";
      }
    }
  };

  const getDueDateStatus = () => {
    if (isCardComplete) {
      return "complete";
    } else {
      if (due > 0) {
        return due > 24 * 60 * 60 * 1000 ? "" : "due soon";
      } else {
        return "overdue";
      }
    }
  };

  const toggleComplete = (ev) => {
    ev.preventDefault();
    setIsCardComplete(!isCardComplete);

    const updatedCard = { ...currCard };
    updatedCard.isComplete = !isCardComplete;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    elPos.height = 10;
    elPos.y = 28;
    elPos.x = 250;
    const popoverProps = { board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  if (!currCard || !board) return <div>Loading..</div>;
  return (
    <div className="card-due-date flex">
      <button
        className={`btn complete-checkbox  ${
          isCardComplete ? "isComplete" : ""
        }`}
        onClick={toggleComplete}
      >
        <span className="trl icon-check"></span>
      </button>

      <div>
        <button className="btn due-date-container" title={getDueDateTitle()}>
          <span>{getFormatedDueDate()}</span>
          <span className={` ${getDueDateStyle()}`}>{getDueDateStatus()}</span>
          <span onClick={(ev) => onOpenPopover(ev, "DATE", null)}>
            <ChevronDown />
          </span>
        </button>
      </div>
    </div>
  );
};
