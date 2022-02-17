import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { onEditBoard } from "../../store/actions/board.actions";
import { utilService } from "../../services/util.service";

class _CardListAdd extends React.Component {
  state = {
    isEditTitle: false,
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
        isEditTitle: !isEditTitle,
      }),
      () => {
        if (this.state.isEditTitle) {
          this.titleInput.current.select();
        }
      }
    );
  };

  onAddList = (ev) => {
    ev.preventDefault();
    const { listTitle } = this.state;
    if (!listTitle) {
      this.titleInput.current.focus();
      return;
    }

    const { board } = this.props;
    const clonedBoard = _.cloneDeep(board);

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

  onCloseAddList = (ev) => {
    if (ev.relatedTarget?.contains(ev.target)) {
      this.titleInput.current.focus();
    } else if (ev.relatedTarget?.id !== "add-list-btn") this.toggleTitleEdit();
  };

  render() {
    const { listTitle, isEditTitle } = this.state;
    const { lists } = this.props.board;
    return (
      <section
        tabIndex="0"
        id="add-list-container"
        className={`card-list-add card-list ${isEditTitle && "edit-mode"}`}
      >
        {isEditTitle ? (
          <form onSubmit={this.onAddList}>
            <input
              className="list-add-title-input"
              placeholder="Enter list title..."
              onChange={this.handleTitleChange}
              onBlur={this.onCloseAddList}
              value={listTitle}
              ref={this.titleInput}
            ></input>
            <div>
              <button
                id="add-list-btn"
                className="btn btn-primary"
                onClick={this.onAddList}
              >
                Add list
              </button>
              <span
                className="trl icon-close icon-lg"
                onClick={this.toggleTitleEdit}
              ></span>
            </div>
          </form>
        ) : (
          <span className="list-add-title" onClick={this.toggleTitleEdit}>
            <span className="trl icon-add icon-sm"></span>
            Add {lists.length > 0 ? "another" : "a"} list
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
