import React from "react";
import { connect } from "react-redux";

class _BoardPage extends React.Component {
  state = {};

  render() {
    return (
      <section className="board-page">
        <h1>Board Page</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    // board: state.boardModule.board,
    // user: state.userModule.user,
  };
}

const mapDispatchToProps = {
  //   loadBoards,
  //   onEditBoard,
  //   onEditBoardOptimistic,
  //   loadBoard,
};

export const BoardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_BoardPage);
