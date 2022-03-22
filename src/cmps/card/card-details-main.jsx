import { CardDetailsData } from "./card-details-data";

export const CardDetailsMain = ({ currCard }) => {
  return (
    <section className="card-details-main">
      <CardDetailsData currCard={currCard} />

      <div className="card-details-description"></div>

      <div className="card-details-attachments"></div>

      <div className="card-details-checlists"></div>

      <div className="activities-cmp"></div>
    </section>
  );
};
