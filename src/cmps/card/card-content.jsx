import React from "react";
import { connect } from "react-redux";

class _CardContent extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <section className="card-content">
        {/* <h1>Card Content</h1> */}
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
