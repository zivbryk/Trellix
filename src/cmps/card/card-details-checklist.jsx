export const CardDetailsChecklist = ({ checklist, currCard, board }) => {
  return (
    <div className="card-details-checklist">
      <div className="card-details-title">
        <span className="trl icon-checkbox-checked icon-lg card-details-title-icon"></span>

        <div className="checklist-title flex">
          <h3>{checklist.title}</h3>
        </div>
      </div>
    </div>
  );
};
