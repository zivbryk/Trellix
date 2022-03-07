import React, { useState, useEffect, useRef } from "react";
import AutosizeInput from "react-input-autosize";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { LoaderCmp } from "../loader-cmp";
import { MemberAvatar } from "../member-avatar";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const BoardHeader = ({ board }) => {
  const dispatch = useDispatch();
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [title, setTitle] = useState("");
  const h1Title = useRef(null);
  const titleInput = useRef(null);

  useEffect(() => {
    if (isEditTitle) titleInput.current.select();
  }, [isEditTitle]);

  useEffect(() => {
    setTitle(board.title);
  }, [board]);

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    setTitle(value);
  };

  const toggleTitleEdit = () => {
    setIsEditTitle(!isEditTitle);
  };

  const onSaveBoardTitle = (ev) => {
    ev.preventDefault();
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.title = title;
    dispatch(onEditBoard(clonedBoard));
    toggleTitleEdit();
  };

  const toggleStarred = () => {
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.isStarred = !clonedBoard.isStarred;
    dispatch(onEditBoard(clonedBoard));
  };

  const onOpenPopver = (ev, popoverName, member) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { member, isInCard: false };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  if (!board) return <LoaderCmp />;
  return (
    <section className="board-header flex space-between">
      <div className="board-header-left flex">
        <div className="board-title">
          {isEditTitle ? (
            <form onSubmit={onSaveBoardTitle}>
              <AutosizeInput
                className="board-name-input"
                type="text"
                value={title}
                onChange={handleTitleChange}
                onBlur={onSaveBoardTitle}
                autoFocus
                ref={titleInput}
              />
            </form>
          ) : (
            <h1
              className="btn board-header-btn"
              onClick={toggleTitleEdit}
              ref={h1Title}
            >
              {board.title}
            </h1>
          )}
        </div>

        <button
          className="btn board-header-btn btn-star-container"
          title="Click to star or unstar this board."
          onClick={toggleStarred}
        >
          <span
            className={`trl board-header-btn-icon icon-sm ${
              board.isStarred ? "icon-starred" : "icon-star"
            }`}
          ></span>
        </button>

        <span className="board-header-btn-divider"></span>

        {/* <button className="avatar-group btn board-header-btn board-header-btn-wide">
          Avatar Group
        </button> */}
        <div>
          <div className="board-header-facepile">
            {board.boardMembers
              .filter((member, idx) => idx < 4)
              .map((member, idx) => (
                <MemberAvatar
                  size={"28"}
                  member={member}
                  isBadge={true}
                  idx={board.boardMembers.length - idx}
                  key={member._id}
                  onOpenPopver={onOpenPopver}
                />
              ))}
            <MemberAvatar
              size={"28"}
              isBadge={false}
              txt={board.boardMembers.length - 4}
            />
          </div>

          <button className="btn board-header-btn board-header-btn-wide flex align-center btn-add-member">
            <span className="trl icon-add-member icon-sm"></span>
            <span>Invite</span>
          </button>
        </div>
      </div>

      <div className="board-header-right flex">
        <button className="btn board-header-btn board-header-btn-wide flex align-center">
          <span className="trl icon-dashboard board-header-btn-icon icon-sm"></span>
          <span>Dashboard</span>
        </button>

        <button className="btn board-header-btn board-header-btn-wide flex align-center">
          <span className="trl icon-tri-dots-hor board-header-btn-icon icon-sm"></span>
          <span>Show menu</span>
        </button>
      </div>
    </section>
  );
};

///////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { connect } from "react-redux";
// import { LoaderCmp } from "../loader-cmp";
// import _ from "lodash";
// import { onEditBoard } from "../../store/actions/board.actions";

// class _BoardHeader extends React.Component {
//   state = {
//     isEditTitle: false,
//     title: "",
//     titleInputWidth: 0,
//   };

//   //When convertinto hooks - find alternative to refs - maybe AutosizeInput from npm REMOVE_COMMENT
//   h1Title = React.createRef();
//   titleInput = React.createRef();

//   componentDidUpdate(prevProps) {
//     //updates board title only when board prop arrives from store
//     if (prevProps.board !== this.props.board) {
//       this.setState((prevState) => ({
//         ...prevState,
//         title: this.props.board.title,
//       }));
//     }
//   }

//   handleTitleChange = (ev) => {
//     const { value } = ev.target;
//     this.setState((prevState) => ({ ...prevState, title: value }));
//   };

//   toggleTitleEdit = () => {
//     const { isEditTitle } = this.state;
//     let { titleInputWidth } = this.state;
//     if (!isEditTitle)
//       titleInputWidth = this.h1Title.current.getBoundingClientRect().width;
//     this.setState(
//       (prevState) => ({
//         ...prevState,
//         isEditTitle: !isEditTitle,
//         titleInputWidth,
//       }),
//       () => {
//         if (this.state.isEditTitle) this.titleInput.current.select();
//       }
//     );
//   };

//   onSaveBoardTitle = (ev) => {
//     ev.preventDefault();
//     const { title } = this.state;
//     const { board } = this.props;
//     const clonedBoard = _.cloneDeep(board);
//     clonedBoard.title = title;
//     this.props.onEditBoard(clonedBoard);
//     this.toggleTitleEdit();
//   };

//   toggleStarred = () => {
//     const { board } = this.props;
//     const clonedBoard = _.cloneDeep(board);
//     clonedBoard.isStarred = !clonedBoard.isStarred;
//     this.props.onEditBoard(clonedBoard);
//   };

//   render() {
//     const { board } = this.props;
//     if (!board) return <LoaderCmp />;
//     const { isEditTitle, title, titleInputWidth } = this.state;
//     return (
//       <section className="board-header flex space-between">
//         <div className="board-header-left flex">
//           <div className="board-title">
//             {isEditTitle ? (
//               <form onSubmit={this.onSaveBoardTitle}>
//                 <input
//                   style={{ width: `${titleInputWidth}px` }}
//                   className="board-name-input"
//                   type="text"
//                   value={title}
//                   onChange={this.handleTitleChange}
//                   onBlur={this.onSaveBoardTitle}
//                   autoFocus
//                   ref={this.titleInput}
//                 />
//               </form>
//             ) : (
//               <h1
//                 className="btn board-header-btn"
//                 onClick={this.toggleTitleEdit}
//                 ref={this.h1Title}
//               >
//                 {board.title}
//               </h1>
//             )}
//           </div>

//           <button
//             className="btn board-header-btn btn-star-container"
//             title="Click to star or unstar this board."
//             onClick={this.toggleStarred}
//           >
//             {/* <span className="trl icon-star board-header-btn-icon icon-sm"></span> */}
//             <span
//               className={`trl board-header-btn-icon icon-sm ${
//                 board.isStarred ? "icon-starred" : "icon-star"
//               }`}
//             ></span>
//           </button>

//           <span className="board-header-btn-divider"></span>

//           <button className="avatar-group btn board-header-btn board-header-btn-wide">
//             Avatar Group
//           </button>

//           <button className="btn board-header-btn board-header-btn-wide flex align-center btn-add-member">
//             <span className="trl icon-add-member icon-sm"></span>
//             <span>Invite</span>
//           </button>
//         </div>

//         <div className="board-header-right flex">
//           <button className="btn board-header-btn board-header-btn-wide flex align-center">
//             <span className="trl icon-dashboard board-header-btn-icon icon-sm"></span>
//             <span>Dashboard</span>
//           </button>

//           <button className="btn board-header-btn board-header-btn-wide flex align-center">
//             <span className="trl icon-tri-dots-hor board-header-btn-icon icon-sm"></span>
//             <span>Show menu</span>
//           </button>
//         </div>
//       </section>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     board: state.boardModule.board,
//     // user: state.userModule.user,
//   };
// }

// const mapDispatchToProps = {
//   onEditBoard,
//   // onLogin,
//   // onSignup
// };

// export const BoardHeader = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(_BoardHeader);
