import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { onEditBoard } from "../../store/actions/board.actions";

export const ListCardBadges = ({ currCard, currList }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();
  const [isCardComplete, setIsCardComplete] = useState(false);

  useEffect(() => {
    setIsCardComplete(currCard.isComplete);
  }, [currCard.isComplete]);

  const due = currCard.dueDate - Date.now();

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

  const getFormatedDueDate = () => {
    if (!currCard.dueDate) return "";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(currCard.dueDate);
  };

  const toggleComplete = () => {
    setIsCardComplete(!isCardComplete);

    const clonedBoard = _.cloneDeep(board);
    const listIdx = board.lists.findIndex((list) => list.id === currList.id);
    const cardIdx = currList.cards.findIndex((card) => card.id === currCard.id);
    clonedBoard.lists[listIdx].cards[cardIdx].isComplete = !isCardComplete;

    dispatch(onEditBoard(clonedBoard));
  };

  const getChecklistsStatistics = () => {
    const checklistsStatistics = currCard.checklists.reduce(
      (acc, currCheckList) => {
        const totalTasksPerList = currCheckList.todos.length;
        if (!acc["totalTasks"]) acc["totalTasks"] = 0;
        acc["totalTasks"] += totalTasksPerList;

        const totalDoneTasksPerList = currCheckList.todos.reduce(
          (acc, currTodo) => {
            if (currTodo.isDone) acc++;
            return acc;
          },
          0
        );

        if (!acc["doneTasks"]) acc["doneTasks"] = 0;
        acc["doneTasks"] += totalDoneTasksPerList;
        return acc;
      },
      {}
    );

    return `${checklistsStatistics.doneTasks}/${checklistsStatistics.totalTasks}`;
  };
  return (
    <div className="list-card-badges">
      <span>
        {currCard.isWatched && (
          <div className="badge icon-only" title="You are watching this card">
            <span className="badge-icon icon-sm trl icon-subscribe"></span>
          </div>
        )}

        {currCard.dueDate && (
          <div
            className={`badge due-date-badge ${getDueDateStyle()}`}
            title={getDueDateTitle()}
            onClick={toggleComplete}
          >
            <span className="badge-icon icon-sm trl icon-clock badge-due-icon"></span>

            {isCardComplete && (
              <span className="badge-icon icon-sm trl icon-checkbox-checked badge-due-checked"></span>
            )}
            {!isCardComplete && (
              <span className="badge-icon icon-sm trl icon-checkbox-unchecked badge-due-unchecked"></span>
            )}
            <span className="badge-text">{getFormatedDueDate()}</span>
          </div>
        )}

        {currCard.description && (
          <div
            className="badge icon-only"
            title={
              currCard.description
                ? "This card has a description."
                : "This card has no description."
            }
          >
            <span className="badge-icon icon-sm trl icon-description"></span>
          </div>
        )}

        {currCard.attachments?.length > 0 && (
          <div className="badge" title="attachments">
            <span className="badge-icon icon-sm trl icon-attachment"></span>
            <span className="badge-text">{currCard.attachments.length}</span>
          </div>
        )}

        {currCard.checklists.length > 0 && (
          <div className="badge checkitems-badge" title="Checklist items">
            <span className="badge-icon icon-sm trl icon-checkbox-checked"></span>
            <span className="badge-text checkitems-badge-text">
              {getChecklistsStatistics()}
            </span>
          </div>
        )}
      </span>
    </div>
  );
};
