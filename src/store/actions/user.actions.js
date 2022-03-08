import { userService } from "../../services/user.service";

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
    } catch (err) {
      showErrorMsg("Cannot login");
      console.log("Cannot login", err);
    }
  };
}
