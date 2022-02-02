import React from "react";
import { connect } from "react-redux";
import { boardService } from "../services/board.service";
import { loadBoards } from "../store/actions/board.actions";
import { boards } from "../frontTempData/boards.js";

class _WorkspacePage extends React.Component {
  componentDidMount() {
    this.props.loadBoards();
  }

  onLoadDataManual = () => {
    console.log("loading data to local storage!");
    boardService.loadDataManual(boards);
  };

  render() {
    return (
      <section className="workspace-page flex justify-center">
        <div className="">
          {/* Hide button upon connection of backend */}
          <button onClick={this.onLoadDataManual}>Load Boards Data</button>
          <h1>Workspace page</h1>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    // boards: state.boardModule.boards
  };
}
const mapDispatchToProps = {
  loadBoards,
};

export const WorkspacePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_WorkspacePage);
