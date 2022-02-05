import React from "react";
import { connect } from "react-redux";
// const { Switch, Route } = ReactRouterDOM
import { Switch, Route, withRouter } from "react-router";
import { AppHeader } from "./cmps/app-header";
import { boardService } from "./services/board.service";
import { boards } from "./frontTempData/boards.js";
import routes from "./routes";

export class _RootCmp extends React.Component {
  componentDidMount() {
    //Remove this local storage loading of boards before production
    console.log("loading data to local storage!");
    boardService.loadDataManual(boards);
  }
  // get bgcStyle() {
  //   const { location } = this.props;
  //   if (!location.pathname.includes("/board")) return {};

  //   const bgcStyle = board
  //     ? {
  //         background: `${board.style.background} center center / cover`,
  //       }
  //     : { background: "#0079bf" };
  //   return bgcStyle;
  // }

  get isBoardOrWorkspace() {
    const { pathname } = this.props.location;
    return pathname.includes("board") || pathname.includes("workspace");
  }

  render() {
    return (
      <section className="root-cmp">
        {this.isBoardOrWorkspace && <AppHeader />}

        <main>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                component={route.component}
                path={route.path}
              />
            ))}
          </Switch>
        </main>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    // board: state.boardModule.board,
  };
}

const _RootCmpWithRouter = withRouter(_RootCmp);
export const RootCmp = connect(mapStateToProps)(_RootCmpWithRouter);
