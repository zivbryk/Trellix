import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ListCardContent } from "./list-card-content";
import { closePopover } from "../../store/actions/app.actions";

export const ListCardPreview = ({
  currBoard,
  currCard,
  currList = null,
  cardIdx = null,
}) => {
  const dispatch = useDispatch();

  const closeAllPopovers = () => {
    dispatch(closePopover());
  };

  return (
    <Draggable key={currCard.id} draggableId={currCard.id} index={cardIdx}>
      {(provided) => (
        <section
          className="card-preview"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Link
            to={`/board/${currBoard._id}/${currList.id}/${currCard.id}`}
            onClick={closeAllPopovers}
          >
            <ListCardContent
              currBoard={currBoard}
              currList={currList}
              currCard={currCard}
            />
          </Link>
        </section>
      )}
    </Draggable>
  );
};
