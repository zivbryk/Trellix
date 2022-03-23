import { useDispatch } from "react-redux";
import { MemberAvatar } from "../member-avatar";

import { openPopover } from "../../store/actions/app.actions";

export const CardDetailsMembers = ({ currCard, board }) => {
  const dispatch = useDispatch();

  const onOpenPopver = (ev, popoverName, member) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = member
      ? { member, board, currCard }
      : { board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  if (!currCard) return <div></div>;
  return (
    <div className="card-details-members card-details-item">
      <h3 className="card-details-item-header">Members</h3>
      <div className="card-details-member-list">
        {currCard.cardMembers.map((member) => (
          <MemberAvatar
            key={member._id}
            size={"32"}
            member={member}
            onOpenPopver={onOpenPopver}
          />
        ))}
        <button
          className="btn btn-add"
          onClick={(ev) => onOpenPopver(ev, "MEMBERS", null)}
        >
          <span className="icon-sm trl icon-add"></span>
        </button>
      </div>
    </div>
  );
};
