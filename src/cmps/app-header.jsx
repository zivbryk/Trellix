import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { ReactComponent as BellIcon } from "../assets/img/icons/bell.svg";
import { ReactComponent as BoardsIcon } from "../assets/img/icons/boards.svg";
import { ReactComponent as ChevronDownIcon } from "../assets/img/icons/chevron-down.svg";
import { NavLink } from "react-router-dom";

class _AppHeader extends React.Component {
  get style() {
    const { location } = this.props;
    if (location.pathname.includes("/workspace")) {
      const style = { background: "#026AA7" };
      return style;
    }
    return null;
  }

  render() {
    return (
      <header
        className="app-header flex space-between align-center"
        style={this.style}
      >
        <nav className="left-pane flex">
          <div className="header-logo flex align-center">
            <NavLink to={"/"}>
              <BoardsIcon />
              <span className="">Trellix</span>
            </NavLink>
          </div>
          <div className="flex">
            <button className="btn btn-header flex align-center">
              <span>Workspace</span>
              <span className="btn-header-svg">
                <ChevronDownIcon />
              </span>
            </button>
            <button className="btn btn-header flex align-center">
              <span>Boards</span>
              <span className="btn-header-svg">
                <ChevronDownIcon />
              </span>
            </button>
            <button className="btn btn-header flex align-center">
              <span>Create</span>
              <span className="btn-header-svg">
                <ChevronDownIcon />
              </span>
            </button>
          </div>
        </nav>

        <nav className="right-pane flex">
          <button className="btn btn-header btn-svg">
            <span className="flex align-center">
              <BellIcon />
            </span>
          </button>
          <button className="btn btn-header">Avatar</button>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    // users: state.userModule.users,
    // user: state.userModule.user,
    // isLoading: state.systemModule.isLoading,
  };
}
const mapDispatchToProps = {};

const RoutableAppHeader = withRouter(_AppHeader);

export const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutableAppHeader);
