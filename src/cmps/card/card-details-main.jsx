import { CardDetailsData } from "./card-details-data";
import { CardDetailsDescription } from "./card-details-description";
import { CardDetailsAttachments } from "./card-details-attachments";
import { CardDetailsChecklist } from "./card-details-checklist";
import { LoaderCmp } from "../loader-cmp";

export const CardDetailsMain = ({ currCard, board }) => {
  if (!currCard) return <LoaderCmp mode="medium" />;
  return (
    <section className="card-details-main">
      <CardDetailsData currCard={currCard} board={board} />

      <CardDetailsDescription currCard={currCard} board={board} />

      <CardDetailsAttachments currCard={currCard} board={board} />

      <div className="checklist-list">
        {currCard.checklists.map((checklist, idx) => (
          <CardDetailsChecklist
            key={checklist.id}
            checklist={checklist}
            checklistIdx={idx}
            currCard={currCard}
            board={board}
          />
        ))}
      </div>

      <div className="activities-cmp"></div>
    </section>
  );
};
