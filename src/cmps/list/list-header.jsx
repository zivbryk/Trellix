import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";

import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const ListHeader = ({ list, board, onDeleteList }) => {
  const dispatch = useDispatch();
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const titleInput = useRef(null);

  useEffect(() => {
    setListTitle(list.title);
  }, [list]);

  useEffect(() => {
    if (isEditTitle) titleInput.current.select();
  }, [isEditTitle]);

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    setListTitle(value);
  };

  const toggleTitleEdit = () => {
    setIsEditTitle(!isEditTitle);
  };

  const onSaveListTitle = (ev) => {
    ev.preventDefault();
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.lists.forEach((listInBoard) => {
      if (listInBoard.id === list.id) listInBoard.title = listTitle;
    });
    dispatch(onEditBoard(clonedBoard));
    toggleTitleEdit();
  };

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { list, onDeleteList };

    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <section className="list-header flex align-center">
      {isEditTitle ? (
        <form onSubmit={onSaveListTitle}>
          <input
            className="list-title-input"
            onChange={handleTitleChange}
            onBlur={onSaveListTitle}
            value={listTitle}
            ref={titleInput}
          ></input>
        </form>
      ) : (
        <h2 className="list-title" onClick={toggleTitleEdit}>
          {listTitle}
        </h2>
      )}

      <button
        className="list-title-extras"
        onClick={(ev) => onOpenPopover(ev, "LIST-ACTIONS")}
      >
        <span className="trl icon-tri-dots-hor icon-sm"></span>
      </button>
    </section>
  );
};

////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { connect } from "react-redux";
// import _ from "lodash";
// import { onEditBoard } from "../../store/actions/board.actions";

// class _ListHeader extends React.Component {
//   state = {
//     isEditTitle: false,
//     listTitle: "",
//   };

//   //When convertinto hooks - find alternative to refs - maybe AutosizeInput from npm REMOVE_COMMENT
//   titleInput = React.createRef();

//   componentDidMount() {
//     this.setState((prevState) => ({
//       ...prevState,
//       listTitle: this.props.list.title,
//     }));
//   }

//   handleTitleChange = (ev) => {
//     const { value } = ev.target;
//     this.setState((prevState) => ({ ...prevState, listTitle: value }));
//   };

//   toggleTitleEdit = () => {
//     const { isEditTitle } = this.state;
//     // let { titleInputWidth } = this.state;
//     // if (!isEditTitle)
//     //   titleInputWidth = this.h1Title.current.getBoundingClientRect().width;
//     this.setState(
//       (prevState) => ({
//         ...prevState,
//         isEditTitle: !isEditTitle,
//       }),
//       () => {
//         if (this.state.isEditTitle) this.titleInput.current.select();
//       }
//     );
//   };

//   onSaveListTitle = (ev) => {
//     ev.preventDefault();
//     const { list } = this.props;
//     const { board } = this.props;
//     const { listTitle } = this.state;
//     const clonedBoard = _.cloneDeep(board);
//     clonedBoard.lists.forEach((listInBoard) => {
//       if (listInBoard.id === list.id) listInBoard.title = listTitle;
//     });
//     this.props.onEditBoard(clonedBoard);
//     this.toggleTitleEdit();
//   };

//   render() {
//     const { listTitle, isEditTitle } = this.state;
//     return (
//       <section className="list-header flex align-center">
//         {isEditTitle ? (
//           <form onSubmit={this.onSaveListTitle}>
//             <input
//               className="list-title-input"
//               onChange={this.handleTitleChange}
//               onBlur={this.onSaveListTitle}
//               value={listTitle}
//               ref={this.titleInput}
//             ></input>
//           </form>
//         ) : (
//           <h2 className="list-title" onClick={this.toggleTitleEdit}>
//             {listTitle}
//           </h2>
//         )}

//         <button className="list-title-extras">
//           <span className="trl icon-tri-dots-hor icon-sm"></span>
//         </button>
//       </section>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     board: state.boardModule.board,
//   };
// }
// const mapDispatchToProps = {
//   onEditBoard,
// };

// export const ListHeader = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(_ListHeader);
