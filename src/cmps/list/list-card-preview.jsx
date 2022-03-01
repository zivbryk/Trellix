import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { ListCardContent } from "./list-card-content";

export const ListCardPreview = ({ currCard, currList, cardIdx }) => {
  return (
    <Draggable key={currCard.id} draggableId={currCard.id} index={cardIdx}>
      {(provided) => (
        <section
          className="card-preview"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListCardContent currCard={currCard} currList={currList} />
        </section>
      )}
    </Draggable>
  );
};
