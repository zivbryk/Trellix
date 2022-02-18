import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBoards } from "../store/actions/board.actions";
import { LoaderCmp } from "../cmps/loader-cmp";
import { BoardList } from "../cmps/board/board-list";

export const WorkspacePage = () => {
  const boards = useSelector((state) => state.boardReducer.boards);
  // console.log("WorkspacePage => boards", boards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBoards());
  }, []);

  if (!boards.length) return <LoaderCmp />;

  return (
    <section className="workspace-page flex justify-center">
      <div className="workspace-left-sidebar">
        <ul className="clean-list">
          <li>
            <span className="trl icon-board"></span>
            <span>Boards</span>
          </li>

          <li>
            <span className="trl icon-template-board"></span>
            <span>Templates</span>
          </li>

          <li>
            <span className="trl icon-home"></span>
            <span>Home</span>
          </li>
        </ul>
      </div>

      <div className="all-boards flex column">
        <div className="starred-boards flex">
          <div className="starred-boards-header flex">
            <div>
              <span className="trl icon-star icon-lg"></span>
            </div>
            <h3>Starred boards</h3>
          </div>
        </div>

        <div className="workspace-boards">
          <h3>YOUR WORKSPACE</h3>
          <BoardList boards={boards} />
        </div>
      </div>
    </section>
  );
};

//////////////////////////////////////////////////////////

// import React from "react";
// import { connect } from "react-redux";
// import { loadBoards } from "../store/actions/board.actions";
// import { LoaderCmp } from "../cmps/loader-cmp";
// import { BoardList } from "../cmps/board/board-list";

// class _WorkspacePage extends React.Component {
//   componentDidMount() {
//     this.props.loadBoards();
//   }

//   render() {
//     const { boards } = this.props;
//     if (!boards.length) return <LoaderCmp />;

//     return (
//       <section className="workspace-page flex justify-center">
//         <div className="workspace-left-sidebar">
//           <ul className="clean-list">
//             <li>
//               <span className="trl icon-board"></span>
//               <span>Boards</span>
//             </li>

//             <li>
//               <span className="trl icon-template-board"></span>
//               <span>Templates</span>
//             </li>

//             <li>
//               <span className="trl icon-home"></span>
//               <span>Home</span>
//             </li>
//           </ul>
//         </div>

//         <div className="all-boards flex column">
//           <div className="starred-boards flex">
//             <div className="starred-boards-header flex">
//               <div>
//                 <span className="trl icon-star icon-lg"></span>
//               </div>
//               <h3>Starred boards</h3>
//             </div>
//           </div>

//           <div className="workspace-boards">
//             <h3>YOUR WORKSPACE</h3>
//             <BoardList boards={boards} />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     boards: state.boardModule.boards,
//   };
// }
// const mapDispatchToProps = {
//   loadBoards,
// };

// export const WorkspacePage = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(_WorkspacePage);
