import { useState, useEffect } from "react";
import { ReactComponent as ChevronDown } from "../../assets/img/icons/chevron-down.svg";

export const CardDueDate = ({ currCard, board }) => {
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
    //   setIsCardComplete(!isCardComplete);

    //   const clonedBoard = _.cloneDeep(board);
    //   const listIdx = board.lists.findIndex((list) => list.id === currList.id);
    //   const cardIdx = currList.cards.findIndex(
    //     (card) => card.id === currCard.id
    //   );
    //   clonedBoard.lists[listIdx].cards[cardIdx].isComplete = !isCardComplete;

    //   dispatch(onEditBoard(clonedBoard));
  };

  if (!currCard || !board) return <div>Loading..</div>;
  return (
    <div className="card-due-date flex" onClick={toggleComplete}>
      <button className="btn complete-checkbox">
        <span></span>
      </button>

      <div>
        <button className="btn due-date-container" title={getDueDateTitle()}>
          <span>{getFormatedDueDate()}</span>
          <span className={` ${getDueDateStyle()}`}>{getDueDateStatus()}</span>
          <span>
            <ChevronDown />
          </span>
        </button>
      </div>
    </div>
  );
};
