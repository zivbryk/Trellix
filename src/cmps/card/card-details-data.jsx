import { CardDetailsMembers } from "./card-details-members";
import { CardDetailsLabels } from "./card-details-labels";

export const CardDetailsData = ({ currCard, board }) => {
  return (
    <section className="card-details-data">
      <CardDetailsMembers currCard={currCard} board={board} />

      <CardDetailsLabels currCard={currCard} board={board} />
    </section>
  );
};
