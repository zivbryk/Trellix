// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleListCardLabels } from "../../store/actions/app.actions";
import { ListCardBadges } from "./list-card-badges";
import { MemberAvatar } from "../member-avatar";
import { openPopover } from "../../store/actions/app.actions";

export const ListCardDetails = ({ currCard, currList }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const isLabelsTextVisible = useSelector(
    (state) => state.appReducer.isLabelsTextVisible
  );
  const dispatch = useDispatch();

  const onToggleListCardLabels = (ev) => {
    ev.preventDefault();
    dispatch(toggleListCardLabels(!isLabelsTextVisible));
  };

  const onOpenPopver = (ev, popoverName, member) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { member, board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <div className="list-card-details">
      <div className="list-card-labels">
        {currCard.labelIds?.map((labelId) => {
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

      <span className="list-card-title">{currCard.title}</span>

      <ListCardBadges currCard={currCard} currList={currList} />

      <div className="list-card-members">
        {currCard.cardMembers.map((member) => (
          <MemberAvatar
            size={"28"}
            member={member}
            isBadge={false}
            key={member._id}
            onOpenPopver={onOpenPopver}
          />
        ))}
      </div>
    </div>
  );
};
