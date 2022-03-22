import { CardDetailsMembers } from "./card-details-members";

export const CardDetailsData = ({ currCard }) => {
  return (
    <section className="card-details-data">
      <CardDetailsMembers currCard={currCard} />
    </section>
  );
};
