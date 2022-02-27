// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleListCardLabels } from "../../store/actions/app.actions";
import { ListCardBadges } from "./list-card-badges";
import { MemberAvatar } from "../member-avatar";

export const ListCardDetails = ({ card }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const isLabelsTextVisible = useSelector(
    (state) => state.appReducer.isLabelsTextVisible
  );
  const dispatch = useDispatch();

  //   const [isLabelsTextVisible, setLabelsTextVisible] = useState(false);

  const onToggleListCardLabels = () => {
    dispatch(toggleListCardLabels(!isLabelsTextVisible));
    // setLabelsTextVisible(!isLabelsTextVisible);
    // console.log(isLabelsTextVisible);
  };

  return (
    <div className="list-card-details">
      <div className="list-card-labels">
        {card.labelIds?.map((labelId) => {
          const label = board.labels.find((label) => label.id === labelId);
          return (
            <span
              className={`card-label card-label-${label.color} mod-list-card ${
                isLabelsTextVisible ? "label-text-on" : "label-text-off"
              }`}
              key={labelId}
              onClick={onToggleListCardLabels}
            >
              <span
                className={`label-text ${
                  isLabelsTextVisible ? "label-text-on" : ""
                }`}
              >
                {label.title}
              </span>
            </span>
          );
        })}
      </div>

      <span className="list-card-title">{card.title}</span>

      <ListCardBadges card={card} />

      <div className="list-card-members">
        {card.cardMembers.map((member) => (
          <MemberAvatar
            size={"28"}
            member={member}
            isBadge={false}
            key={member._id}
          />
        ))}
      </div>
    </div>
  );
};
