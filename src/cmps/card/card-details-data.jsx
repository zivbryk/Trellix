import { CardDetailsMembers } from "./card-details-members";
import { CardLabels } from "./card-labels";
import { CardDueDate } from "./card-due-date";

export const CardDetailsData = ({ currCard, board }) => {
  return (
    <section className="card-details-data">
      <CardDetailsMembers currCard={currCard} board={board} />

      <div className="card-details-item">
        <h3 className="card-details-item-header">Labels</h3>
        <CardLabels currCard={currCard} board={board} mod={"card-details"} />
      </div>

      <div className="card-details-item">
        {currCard?.dueDate && (
          <>
            <h3 className="card-details-item-header">Due-date</h3>
            <CardDueDate currCard={currCard} board={board} />
          </>
        )}
      </div>
    </section>
  );
};
