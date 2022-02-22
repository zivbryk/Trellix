import React from "react";
import { ListCardContent } from "./list-card-content";

export const ListCardPreview = ({ card }) => {
  return (
    <section className="card-preview">
      <ListCardContent card={card} />
    </section>
  );
};
