/////// UNCOMMENT FOR FRONTEND DEVELOPMENT ///////
// import { storageService } from "./async-storage.service";

import { httpService } from "./http.service";

const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";
// const STORAGE_KEY = "user";

/////// UNCOMMENT FOR FRONTEND DEVELOPMENT ///////
// import { users } from "../frontTempData/users";
// storageService.load(STORAGE_KEY, users);

export const userService = {
  login,
  googleLogin,
  logout,
  signup,
  getLoggedinUser,
};

window.userService = userService;

async function googleLogin(tokenId) {
  try {
    const googleRes = await fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${tokenId}`
    )
      .then((res) => res.json())
      .then((data) => data);
    const { name, picture } = googleRes;
    const user = {
      fullname: name,
      username: name.toLowerCase().replace(/\s/g, ""),
      password: name.toLowerCase().replace(/\s/g, ""),
      imgUrl: picture,
    };
    if (user) return _saveLocalUser(user);
  } catch (err) {
    console.log("user.service: err @ gooleLogin", err);
  }
}

async function login(credentials) {
  try {
    const user = await httpService.post("auth/login", credentials);
    if (user) return _saveLocalUser(user);
  } catch (err) {
    throw err;
  }
}

async function signup(credentials) {
  try {
    const user = await httpService.post("auth/signup", credentials);
    return _saveLocalUser(user);
  } catch (err) {
    throw err;
  }
}

async function logout(user) {
  try {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
    return await httpService.post("auth/logout", user);
  } catch (err) {
    throw err;
  }
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}

function getLoggedinUser() {
  return JSON.parse(
    sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || "null"
  );
}

/////// UNCOMMENT FOR FRONTEND DEVELOPMENT ///////
/****DEVELOPMENT LOCAL STORAGE FUNCTIONS ****/
// function getUsers() {
//   return storageService.query(STORAGE_KEY);
// }

// async function login(credentials) {
//   try {
//     const users = await storageService.query("user");
//     const user = users.find(
//       (user) =>
//         user.username === credentials.username &&
//         user.password === credentials.password
//     );
//     if (user) return _saveLocalUser(user);
//   } catch (err) {
//     console.log("user.service: err @ login", err);
//   }
// }

// async function signup(credentials) {
//   try {
//     const user = await storageService.post("user", credentials);
//     return _saveLocalUser(user);
//   } catch (err) {
//     console.log("user.service: err @ signup", err);
//   }
// }

// async function logout() {
//   try {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
//   } catch (err) {
//     console.log("user.service: err @ logout", err);
//   }
// }

/////////////////////////////////////////////////
