const userService = require("../service/users");

const createUser = async (req, res) => {
  const id = await userService.createUser(req);
  res.status(201).json({ id });
}

module.exports = {
  createUser
}