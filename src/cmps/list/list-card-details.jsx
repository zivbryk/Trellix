import { useState } from "react";
import { useSelector } from "react-redux";

export const ListCardDetails = ({ card }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const [isLabelTextVisible, setLabelTextVisible] = useState(false);

  const toggleLabelText = () => {
    setLabelTextVisible(!isLabelTextVisible);
    // console.log(isLabelTextVisible);
  };
  return (
    <div className="list-card-details">
      <div className="list-card-labels">
        {card.labelIds?.map((labelId) => {
          const label = board.labels.find((label) => label.id === labelId);
          return (
            <span
              className={`card-label card-label-${label.color} mod-list-card ${
                isLabelTextVisible ? "label-text-on" : ""
              }`}
              key={labelId}
              onClick={toggleLabelText}
            >
              <span
                className={`label-text ${
                  isLabelTextVisible ? "label-text-on" : ""
                }`}
              >
                {labelId}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
