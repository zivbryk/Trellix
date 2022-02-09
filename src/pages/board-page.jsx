import React from "react";
import { connect } from "react-redux";
import { loadBoard } from "../store/actions/board.actions";
import { BoardHeader } from "../cmps/board/board-header";

class _BoardPage extends React.Component {
  state = {};

  componentDidMount() {
    const { boardId } = this.props.match.params;
    this.props.loadBoard(boardId);
  }

  render() {
    return (
      <section className="board-page">
        <BoardHeader />
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
  //   onEditBoard,
  //   onEditBoardOptimistic,
  loadBoard,
};

export const BoardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_BoardPage);
