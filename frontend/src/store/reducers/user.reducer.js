import { userService } from "../../services/user.service";

const initialState = {
  loggedInUser: userService.getLoggedinUser(),
  users: [],
  authStatus: false,
};

export function userReducer(state = initialState, action) {
  var newState = state;

  switch (action.type) {
    case "SET_USER":
      newState = { ...state, loggedInUser: action.user };
      break;
    case "SET_USERS":
      newState = { ...state, users: action.users };
      break;
    case "SET_AUTH_STATUS":
      newState = { ...state, authStatus: action.authStatus };
      break;
    default:
  }
  // For debug:
  window.userState = newState;
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  return newState;
}
