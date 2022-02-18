import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";
import { AppHeader } from "./cmps/app-header";
import { boardService } from "./services/board.service";
import { boards } from "./frontTempData/boards.js";
import routes from "./routes";
import { TestCmp } from "./cmps/test-cmp";

export const RootCmp = () => {
  //     // Remove this local storage loading of boards before production REMOVE_COMMENT
  //     // console.log("loading data to local storage!");
  //     // boardService.loadDataManual(boards);

  const board = useSelector((state) => state.boardReducer.board);
  const pathname = useLocation().pathname;

  function getBgcStyle() {
    if (!pathname.includes("/board")) return {};

    const bgcStyle = board
      ? {
          background: `${board.style.cover} center center / cover`,
        }
      : { background: "#0079bf" };
    return bgcStyle;
  }

  function getIsBoardOrWorkspace() {
    return pathname.includes("board") || pathname.includes("workspace");
  }

  return (
    <section className="root-cmp flex column" style={getBgcStyle()}>
      {getIsBoardOrWorkspace() && <AppHeader />}

      <main className="flex column">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              element={route.element}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
    </section>
  );
};

////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { connect } from "react-redux";
// // import { Routes, Route, withRouter } from "react-router";
// import { Routes, Route } from "react-router";
// import { AppHeader } from "./cmps/app-header";
// // import { boardService } from "./services/board.service";
// // import { boards } from "./frontTempData/boards.js";
// import routes from "./routes";

// export class _RootCmp extends React.Component {
//   componentDidMount() {
//     // Remove this local storage loading of boards before production REMOVE_COMMENT
//     // console.log("loading data to local storage!");
//     // boardService.loadDataManual(boards);
//   }

//   get bgcStyle() {
//     const { board, location } = this.props;
//     if (!location.pathname.includes("/board")) return {};

//     const bgcStyle = board
//       ? {
//           background: `${board.style.cover} center center / cover`,
//         }
//       : { background: "#0079bf" };
//     return bgcStyle;
//   }

//   get isBoardOrWorkspace() {
//     const { pathname } = this.props.location;
//     return pathname.includes("board") || pathname.includes("workspace");
//   }

//   render() {
//     return (
//       <section className="root-cmp flex column" style={this.bgcStyle}>
//         {this.isBoardOrWorkspace && <AppHeader />}

//         <main className="flex column">
//           <Routes>
//             {routes.map((route) => (
//               <Route
//                 key={route.path}
//                 exact
//                 element={route.element}
//                 path={route.path}
//               />
//             ))}
//           </Routes>
//         </main>
//       </section>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     board: state.boardModule.board,
//   };
// }

// export const RootCmp = connect(mapStateToProps)(_RootCmp);
// // const _RootCmpWithRouter = withRouter(_RootCmp);
// // export const RootCmp = connect(mapStateToProps)(_RootCmpWithRouter);
