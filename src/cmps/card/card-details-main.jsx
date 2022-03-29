import { CardDetailsData } from "./card-details-data";
import { CardDetailsDescription } from "./card-details-description";
import { CardDetailsAttachments } from "./card-details-attachments";

export const CardDetailsMain = ({ currCard, board }) => {
  return (
    <section className="card-details-main">
      <CardDetailsData currCard={currCard} board={board} />

      <CardDetailsDescription currCard={currCard} board={board} />

      <CardDetailsAttachments currCard={currCard} board={board} />

      <div className="card-details-checlists"></div>

      <div className="activities-cmp"></div>
    </section>
  );
};
