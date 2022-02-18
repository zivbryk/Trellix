import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as BoardsIcon } from "../assets/img/icons/boards.svg";
import BoardsAnimation from "../assets/img/animations/trello-logo-loader.gif";
import { NavLink } from "react-router-dom";
import { UserMsg } from "../cmps/user-msg";

export const AppHeader = () => {
  const pathname = useLocation().pathname;

  function getStyle() {
    if (pathname.includes("/workspace")) {
      const style = { background: "#026AA7" };
      return style;
    }
    return null;
  }

  return (
    <>
      <header
        className="app-header flex space-between align-center"
        style={getStyle()}
      >
        <nav className="left-pane flex">
          <NavLink to={"/"} className="header-logo flex align-center">
            <div>
              <BoardsIcon />
              <span className="">Trellix</span>
            </div>

            <div>
              <img src={BoardsAnimation} alt="animated logo" />
              <span className="">Trellix</span>
            </div>
          </NavLink>

          <div className="flex">
            <button className="btn btn-header btn-header-wide flex align-center">
              <span>Workspace</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>

            <button className="btn btn-header btn-header-wide flex align-center">
              <span>Starred</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>

            <button className="btn btn-header btn-header-wide flex align-center">
              <span>Create</span>
              <span className="trl icon-chevron-down icon-sm"></span>
            </button>
          </div>
        </nav>

        <nav className="right-pane flex">
          <button className="btn btn-header flex">
            <span className="trl icon-bell icon-md"></span>
          </button>

          <div className="avatar">
            <img
              src="https://res.cloudinary.com/zivcloud555/image/upload/v1633516871/Trellis%20permanent%20img/Avatars/ziv_f4seir.png"
              alt="avatar"
            />
          </div>
        </nav>
      </header>
      <UserMsg />
    </>
  );
};

//////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// // import { withRouter } from "react-router";
// import { connect } from "react-redux";
// import { ReactComponent as BoardsIcon } from "../assets/img/icons/boards.svg";
// import BoardsAnimation from "../assets/img/animations/trello-logo-loader.gif";
// import { NavLink } from "react-router-dom";
// import { UserMsg } from "../cmps/user-msg";

// class _AppHeader extends React.Component {
//   get style() {
//     const { location } = this.props;
//     if (location.pathname.includes("/workspace")) {
//       const style = { background: "#026AA7" };
//       return style;
//     }
//     return null;
//   }

//   render() {
//     return (
//       <>
//         <header
//           className="app-header flex space-between align-center"
//           style={this.style}
//         >
//           <nav className="left-pane flex">
//             <NavLink to={"/"} className="header-logo flex align-center">
//               <div>
//                 <BoardsIcon />
//                 <span className="">Trellix</span>
//               </div>

//               <div>
//                 <img src={BoardsAnimation} alt="animated logo" />
//                 <span className="">Trellix</span>
//               </div>
//             </NavLink>

//             <div className="flex">
//               <button className="btn btn-header btn-header-wide flex align-center">
//                 <span>Workspace</span>
//                 <span className="trl icon-chevron-down icon-sm"></span>
//               </button>

//               <button className="btn btn-header btn-header-wide flex align-center">
//                 <span>Starred</span>
//                 <span className="trl icon-chevron-down icon-sm"></span>
//               </button>

//               <button className="btn btn-header btn-header-wide flex align-center">
//                 <span>Create</span>
//                 <span className="trl icon-chevron-down icon-sm"></span>
//               </button>
//             </div>
//           </nav>

//           <nav className="right-pane flex">
//             <button className="btn btn-header flex">
//               <span className="trl icon-bell icon-md"></span>
//             </button>

//             <div className="avatar">
//               <img
//                 src="https://res.cloudinary.com/zivcloud555/image/upload/v1633516871/Trellis%20permanent%20img/Avatars/ziv_f4seir.png"
//                 alt="avatar"
//               />
//             </div>
//           </nav>
//         </header>
//         <UserMsg />
//       </>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     // users: state.userModule.users,
//     // user: state.userModule.user,
//     // isLoading: state.systemModule.isLoading,
//   };
// }
// const mapDispatchToProps = {};

// export const AppHeader = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(_AppHeader);
// // const RoutableAppHeader = withRouter(_AppHeader);
// // export const AppHeader = connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(RoutableAppHeader);
