import { useSelector, useDispatch } from "react-redux";
import { toggleListCardLabels } from "../../store/actions/app.actions";

import { openPopover } from "../../store/actions/app.actions";

export const CardLabels = ({ currCard, board, mod }) => {
  const isLabelsTextVisible = useSelector(
    (state) => state.appReducer.isLabelsTextVisible
  );
  const dispatch = useDispatch();

  const onToggleListCardLabels = (ev) => {
    ev.preventDefault();
    dispatch(toggleListCardLabels(!isLabelsTextVisible));
  };

  const onClickLabel = (ev) => {
    mod === "list-card"
      ? onToggleListCardLabels(ev)
      : onOpenPopover(ev, "LABELS");
  };

  const getClassName = () => {
    let style = "";
    if (mod === "list-card") {
      style = isLabelsTextVisible ? "label-text-on" : "label-text-off";
    } else if (mod === "card-details") {
      style = "label-text-on";
    }

    return style;
  };

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    elPos.height = 10;
    elPos.y = 28;
    const popoverProps = { board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  if (!currCard || !board) return <div>Loading...</div>;
  return (
    <div className="card-labels">
      {currCard.labelIs !== [] &&
        currCard.labelIds?.map((labelId) => {
          const label = board.labels.find((label) => label.id === labelId);
          if (!label) return "";
          if (label.color === "none" && mod === "list-card") return "";
          return (
            <span
              className={`card-label card-label-${
                label.color
              } mod-${mod} ${getClassName()}`}
              key={labelId}
              onClick={onClickLabel}
            >
              <span className={`label-text ${getClassName()}`}>
                {label.title}
              </span>
            </span>
          );
        })}

      {mod === "card-details" && (
        <button
          className="btn btn-add"
          onClick={(ev) => onOpenPopover(ev, "LABELS")}
        >
          <span className="trl icon-add icon-sm"></span>
        </button>
      )}
    </div>
  );
};
