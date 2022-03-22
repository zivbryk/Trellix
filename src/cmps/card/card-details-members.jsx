import { MemberAvatar } from "../member-avatar";

export const CardDetailsMembers = ({ currCard }) => {
  if (!currCard) return <div></div>;
  return (
    <div className="card-details-members card-details-item">
      <h3 className="card-details-item-header">Members</h3>
      <div className="card-details-member-list">
        {currCard.cardMembers.map((member) => (
          <MemberAvatar key={member._id} size={"32"} member={member} />
        ))}
        <button className="btn btn-add ">
          <span className="icon-sm trl icon-add"></span>
        </button>
      </div>
    </div>
  );
};
