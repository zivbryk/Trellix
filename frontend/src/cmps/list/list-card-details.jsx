import { useSelector, useDispatch } from "react-redux";
import { ListCardBadges } from "./list-card-badges";
import { MemberAvatar } from "../member-avatar";
import { CardLabels } from "../card/card-labels";

import { openPopover } from "../../store/actions/app.actions";

export const ListCardDetails = ({ currCard, currList, coverMode }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();

  const onOpenPopover = (ev, popoverName, member) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { member, board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <div
      className={`list-card-details ${
        coverMode === "full" ? "full-cover-details" : ""
      }  ${currCard.style.isColorWhite ? "white" : "black"} ${
        currCard.style.isImage ? "image-cover" : "color-cover"
      }`}
    >
      {(coverMode === "half" || coverMode === null) && (
        <CardLabels currCard={currCard} board={board} mod={"list-card"} />
      )}

      <span
        className={`list-card-title ${
          coverMode === "full" ? "full-cover-title" : ""
        } ${currCard.style.isColorWhite ? "white" : "black"} ${
          currCard.style.isImage ? "image-cover" : "color-cover"
        }`}
      >
        {currCard.title}
      </span>

      {(coverMode === "half" || coverMode === null) && (
        <ListCardBadges currCard={currCard} currList={currList} />
      )}

      {(coverMode === "half" || coverMode === null) && (
        <div className="list-card-members">
          {currCard.cardMembers?.map((member) => (
            <MemberAvatar
              size={"28"}
              member={member}
              isBadge={false}
              key={member._id}
              onOpenPopover={onOpenPopover}
            />
          ))}
        </div>
      )}
    </div>
  );
};
