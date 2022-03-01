import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { ListHeader } from "./list-header";
import { ListCardPreview } from "./list-card-preview";
import { AddCard } from "./add-card";

export const CardsList = ({ list, board, listIdx }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const toggleAddingCard = () => {
    setIsAddingCard(!isAddingCard);
  };

  return (
    <Draggable draggableId={list.id} index={listIdx}>
      {(provided) => (
        <section
          className="cards-list"
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={list.id}>
            {(provided) => (
              <div
                className="list-content flex column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <ListHeader list={list} board={board} />

                <div className="card-previews">
                  {list.cards.map((card, idx) => (
                    <ListCardPreview
                      key={card.id}
                      currCard={card}
                      cardIdx={idx}
                      currList={list}
                    />
                  ))}
                  {provided.placeholder}
                  {isAddingCard && (
                    <AddCard
                      toggleAddingCard={toggleAddingCard}
                      currList={list}
                    />
                  )}
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
            )}
          </Droppable>
        </section>
      )}
    </Draggable>
  );
};
