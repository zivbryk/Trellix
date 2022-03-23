export const CardDetailsLabels = ({ currCard, board }) => {
  const onOpenPopover = () => {
    console.log("opening labels popover!!");
  };

  if (!currCard) return <div>Loading..</div>;
  return (
    <div className="card-details-labels card-details-item">
      <h3 className="card-details-item-header">Labels</h3>
      <div className="labels-list">
        {currCard.labelIds.map((labelId) => {
          const label = board.labels.find((label) => label.id === labelId);
          return (
            <span
              className={`card-label card-label-${label.color}`}
              key={labelId}
              onClick={onOpenPopover}
            >
              <span className={`label-text ${true ? "label-text-on" : ""}`}>
                {label.title}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
