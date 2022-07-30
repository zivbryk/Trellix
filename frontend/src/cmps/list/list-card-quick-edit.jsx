export const ListCardQuickEdit = ({ currCard }) => {
  console.log("currCard: ", currCard);
  return (
    <section className="list-card-quick-edit list-card-content">
      {/* TODO: cmp higher z-index */}
      <div className="list-card-details">
        {/* TODO: textarea resize: none; */}
        <textarea
          className="list-card-edit-title"
          name="list-card-edit-title-name"
          id="list-card-edit-title-id"
          cols="30"
          rows="10"
          value={`${currCard.title}`}
        ></textarea>
      </div>
    </section>
  );
};
