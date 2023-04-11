const usersModel = require("../model/users");

const createUser = async (req) => {
  const response = await usersModel.createUser(req.body);
  return response.rows[0].username;
}

module.exports = {
  createUser
}
