import { useState } from "react";

export const ListCardBadges = ({ card }) => {
  const [isComplete, setIsComplete] = useState(false);

  const due = card.dueDate - Date.now();

  const getDueDateTitle = () => {
    if (isComplete) {
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
    if (isComplete) {
      return "is-due-complete";
    } else {
      if (due > 0) {
        return due > 24 * 60 * 60 * 1000 ? "" : "is-due-soon";
      } else return "is-due-now";
    }
  };

  const getFormatedDueDate = () => {
    if (!card.dueDate) return "";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(card.dueDate);
  };

  const toggleComplete = () => {
    setIsComplete(!isComplete);
  };

  const getChecklistsTotal = () => {
    const doneTasks = 2;
    const totalTasks = 4;
    return `${doneTasks}/${totalTasks}`;
  };
  return (
    <div className="list-card-badges">
      <span>
        {card.isWatched && (
          <div className="badge icon-only" title="You are watching this card">
            <span className="badge-icon icon-sm trl icon-subscribe"></span>
          </div>
        )}

        {card.dueDate && (
          <div
            className={`badge due-date-badge ${getDueDateStyle()}`}
            title={getDueDateTitle()}
            onClick={toggleComplete}
          >
            {true && (
              <span className="badge-icon icon-sm trl icon-clock badge-due-icon"></span>
            )}
            {isComplete && (
              <span className="badge-icon icon-sm trl icon-checkbox-checked badge-due-checked"></span>
            )}
            {!isComplete && (
              <span className="badge-icon icon-sm trl icon-checkbox-unchecked badge-due-unchecked"></span>
            )}
            <span className="badge-text">{getFormatedDueDate()}</span>
          </div>
        )}

        {card.description && (
          <div
            className="badge icon-only"
            title={
              card.description
                ? "This card has a description."
                : "This card has no description."
            }
          >
            <span className="badge-icon icon-sm trl icon-description"></span>
          </div>
        )}

        {card.attachments?.length > 0 && (
          <div className="badge" title="attachments">
            <span className="badge-icon icon-sm trl icon-attachment"></span>
            <span className="badge-text">{card.attachments.length}</span>
          </div>
        )}

        <div className="badge checkitems-badge" title="Checklist items">
          <span className="badge-icon icon-sm trl icon-checkbox-checked"></span>
          <span className="badge-text checkitems-badge-text">
            {getChecklistsTotal()}
          </span>
        </div>
      </span>
    </div>
  );
};
