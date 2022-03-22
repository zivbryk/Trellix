import { useState, useEffect, useRef } from "react";
export const CardDetailsHeader = ({ currCard, currList }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const titleTextArea = useRef(null);

  useEffect(() => {
    if (currCard) setCardTitle(currCard.title);
  }, [currCard]);

  useEffect(() => {
    if (isEditingTitle) titleTextArea.current.focus();
  }, [isEditingTitle]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCardTitle(value);
  };

  if (!currCard) return <div></div>;
  return (
    <section className="card-details-header">
      <span className="trl icon-card icon-lg"></span>

      <div className="card-details-title">
        <textarea
          className={`${isEditingTitle ? "no-shadow" : "no-shadow"}`}
          value={cardTitle}
          onChange={handleChange}
          onBlur={() => setIsEditingTitle(false)}
          ref={titleTextArea}
        ></textarea>
      </div>

      <div className="in-list-subtitle quiet">
        <p>
          in list
          <span> </span>
          <span className="link">{currList.title}</span>
        </p>
      </div>
    </section>
  );
};
