import React from "react";
import { ListHeader } from "./list-header";
import { ListCardPreview } from "./list-card-preview";

export const CardsList = ({ list, board }) => {
  return (
    <section className="cards-list">
      <div className="list-content flex column">
        <ListHeader list={list} board={board} />
        <div className="card-previews">
          {list.cards.map((card) => (
            <ListCardPreview key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
