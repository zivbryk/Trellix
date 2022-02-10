import React from "react";
import { connect } from "react-redux";

class _CardList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <section className="card-list">
        <div className="list-content flex column">
          <div className="list-header">
            <input className="list-header-name" value={list.title}></input>
            <button className="list-header-extras">
              <span className="trl icon-tri-dots-hor icon-sm"></span>
            </button>
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
