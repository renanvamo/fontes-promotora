const userService = require("../service/users");

const createUser = async (req, res) => {
  try {
    const username = await userService.createUser(req);
    return res.status(201).json({ username });
    
  } catch (err) {
    return res.status(500).json({ ERROR: err.message })
  }
}

module.exports = {
  createUser
}