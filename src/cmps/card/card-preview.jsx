import React from "react";
import { connect } from "react-redux";
import { CardContent } from "../card/card-content";

class _CardPreview extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <section className="card-preview">
        <CardContent card={card} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    // board: state.boardModule.board,
  };
}
const mapDispatchToProps = {};

export const CardPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardPreview);
