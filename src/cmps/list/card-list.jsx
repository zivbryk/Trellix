import React from "react";
import { connect } from "react-redux";
import { ListHeader } from "../list/list-header";
import { CardPreview } from "../card/card-preview";

class _CardList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <section className="card-list">
        <div className="list-content flex column">
          <ListHeader list={list} />
          <div className="card-previews">
            {list.cards.map((card) => (
              <CardPreview key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    // board: state.boardModule.board,
  };
}
const mapDispatchToProps = {
  //   onEditBoard,
  //   onEditBoardOptimistic,
};

export const CardList = connect(mapStateToProps, mapDispatchToProps)(_CardList);
