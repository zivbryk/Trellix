import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { onEditBoard } from "../../store/actions/board.actions";
import { utilService } from "../../services/util.service";

class _CardListAdd extends React.Component {
  state = {
    isEditTitle: true,
    listTitle: "",
  };

  //When convertinto hooks - find alternative to refs - maybe AutosizeInput from npm REMOVE_COMMENT
  titleInput = React.createRef();

  handleTitleChange = (ev) => {
    const { value } = ev.target;
    this.setState((prevState) => ({ ...prevState, listTitle: value }));
  };

  toggleTitleEdit = () => {
    const { isEditTitle } = this.state;
    this.setState(
      (prevState) => ({
        ...prevState,
        isEditTitle: isEditTitle,
      }),
      () => {
        if (this.state.isEditTitle) this.titleInput.current.select();
      }
    );
  };

  onAddList = (ev) => {
    ev.preventDefault();
    const { board } = this.props;
    const clonedBoard = _.cloneDeep(board);
    const { listTitle } = this.state;

    const newList = {
      id: utilService.makeId(),
      title: listTitle,
      cards: [],
    };
    clonedBoard.lists.push(newList);

    this.setState(
      (prevState) => ({ ...prevState, listTitle: "" }),
      () => this.props.onEditBoard(clonedBoard)
    );
  };

  render() {
    const { listTitle, isEditTitle } = this.state;
    return (
      <section className="card-list-add card-list">
        {isEditTitle ? (
          <form onSubmit={this.onAddList}>
            <input
              className="list-add-title-input"
              placeholder="Enter list title..."
              onChange={this.handleTitleChange}
              onBlur={this.toggleTitleEdit}
              value={listTitle}
              ref={this.titleInput}
            ></input>
            <button>Add List</button>
            <button>
              <span className="trl icon-close icon-sm"></span>
            </button>
          </form>
        ) : (
          <span className="list-add-title" onClick={this.toggleTitleEdit}>
            <span className="trl icon-add icon-sm"></span>
            Add another list
          </span>
        )}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardModule.board,
  };
}
const mapDispatchToProps = {
  onEditBoard,
};

export const CardListAdd = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardListAdd);
