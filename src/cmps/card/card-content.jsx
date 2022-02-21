import React from "react";

export const CardContent = ({ card }) => {
  function getCardStyle() {
    //
  }

  return (
    <section className={`card-content ${card.style.cover ? "is-covered" : ""}`}>
      <div
        className={`list-card-cover ${card.style.cover ? "is-covered" : ""}`}
      ></div>
      <h1>{card.title}</h1>
    </section>
  );
};
