import React from "react";
import { ListCardContent } from "./list-card-content";

export const ListCardPreview = ({ currCard, currList }) => {
  return (
    <section className="card-preview">
      <ListCardContent currCard={currCard} currList={currList} />
    </section>
  );
};
