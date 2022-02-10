import React from "react";
import { connect } from "react-redux";
import { loadBoard } from "../store/actions/board.actions";
import { BoardHeader } from "../cmps/board/board-header";
import { LoaderCmp } from "../cmps/loader-cmp";
import { CardList } from "../cmps/card/card-list";

class _BoardPage extends React.Component {
  state = {};

  componentDidMount() {
    const { boardId } = this.props.match.params;
    this.props.loadBoard(boardId);
  }

  render() {
    const { board } = this.props;
    if (!board) return <LoaderCmp />;
    return (
      <section className="board-page flex column">
        <BoardHeader />
        <div className="board-canvas">
          <div className="lists-container">
            {board.lists.map((list) => (
              <CardList list={list} key={list.id} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardModule.board,
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
