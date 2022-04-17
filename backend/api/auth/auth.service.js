const bcrypt = require("bcrypt");
const userService = require("../user/user.service");
const logger = require("../../services/logger.service");

async function login(username, password) {
  logger.debug(`auth.service - login with username: ${username}`);

  const user = await userService.getByUsername(username);
  if (!user) return Promise.reject("Invalid username or password");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return Promise.reject("Invalid username or password");

  //** Uncomment when using "online users feature" **//
  //   user.isOnline = true;
  //   const loggedinUser = await userService.update(user);

  delete user.password;
  user._id = user._id.toString();
  //   return loggedinUser;
  return user;
}

async function signup(username, fullname, email, password) {
  const saltRounds = 10;

  logger.debug(
    `auth.service - signup with username: ${username}, fullname: ${fullname}`
  );
  if (!username || !fullname || !email || !password)
    return Promise.reject("fullname, username and password are required!");

  const hash = await bcrypt.hash(password, saltRounds);
  return userService.add({ username, email, fullname, password: hash });
}

async function logout(user) {
  logger.debug(`auth.service - logout completed for username: ${username}`);
  user.isOnline = false;
  await userService.update(user);
}

module.exports = {
  signup,
  login,
  logout,
};
