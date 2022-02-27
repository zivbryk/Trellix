import React, { useState } from "react";
import { ListHeader } from "./list-header";
import { ListCardPreview } from "./list-card-preview";
import { AddCard } from "./add-card";

export const CardsList = ({ list, board }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const toggleAddingCard = () => {
    setIsAddingCard(!isAddingCard);
  };

  return (
    <section className="cards-list">
      <div className="list-content flex column">
        <ListHeader list={list} board={board} />
        <div className="card-previews">
          {list.cards.map((card) => (
            <ListCardPreview key={card.id} card={card} />
          ))}
          {isAddingCard && <AddCard toggleAddingCard={toggleAddingCard} />}
        </div>

        {!isAddingCard && (
          <div className="card-composer flex space-between">
            <button
              className="open-card-composer flex align-center"
              onClick={toggleAddingCard}
            >
              <span className="icon-sm trl icon-add"></span>
              <span>Add a card</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
