//TODO: delete cmp

export const ListCardQuickEdit = ({ currCard }) => {
  const handleClick = (ev) => {
    ev.stopPropagation();
  };

  return (
    <section
      className="list-card-quick-edit list-card-content"
      onClick={handleClick}
    >
      <div className="list-card-details">
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
