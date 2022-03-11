import { userService } from "../../services/user.service";
import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service";

export function onLogin(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(credentials);
      dispatch({
        type: "SET_USER",
        user,
      });
      showSuccessMsg("User logged in successfully");
    } catch (err) {
      showErrorMsg("Cannot login");
      console.log("user.actions: err @ login", err);
    }
  };
}

export function onGoogleLogin(tokenId) {
  return async (dispatch) => {
    try {
      const user = await userService.googleLogin(tokenId);
      dispatch({
        type: "SET_USER",
        user,
      });
      showSuccessMsg("User logged in successfully");
    } catch (err) {
      showErrorMsg("Cannot login");
      console.log("user.actions: err @ googleLogin", err);
    }
  };
}

export function onSignup(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.signup(credentials);
      dispatch({ type: "SET_USER", user });
      showSuccessMsg("User signed up successfully");
    } catch (err) {
      showErrorMsg("Cannot signup");
      console.log("user.actions: err @ signup", err);
    }
  };
}

export function onLogout() {
  return async (dispatch) => {
    try {
      userService.logout();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      dispatch({
        type: "SET_AUTH_STATUS",
        authStatus: false,
      });
      // showSuccessMsg("User logged out successfully");
    } catch (err) {
      showErrorMsg("Cannot logout");
      console.log("user.actions: err @ logout", err);
    }
  };
}
