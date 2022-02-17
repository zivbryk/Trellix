import React from "react";
import { connect } from "react-redux";

class _CardContent extends React.Component {
  get CardStyle() {
    //
  }

  render() {
    const { card } = this.props;
    return (
      <section
        className={`card-content ${card.style.cover ? "is-covered" : ""}`}
      >
        <div
          className={`list-card-cover ${card.style.cover ? "is-covered" : ""}`}
        ></div>
        <h1>{card.title}</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardModule.board,
  };
}
const mapDispatchToProps = {};

export const CardContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardContent);
