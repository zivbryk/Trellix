import { userService } from "../../services/user.service";
import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service";

export function onLogin(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(
        (credentials = { username: "zivbryk", password: "1234" })
      );
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
