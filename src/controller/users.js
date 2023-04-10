const userService = require("../service/users");

const createUser = async (req, res) => {
  try {
    const id = await userService.createUser(req);
    return res.status(201).json({ id });
    
  } catch (err) {
    return res.status(500).json({ ERROR: err.message })
  }
}

module.exports = {
  createUser
}