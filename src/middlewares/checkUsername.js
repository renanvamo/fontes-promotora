const userModel = require("../model/users");

const userExists = async (req, res, next) => {
  const { username } = req.headers;

  if (!username) return res.sendStatus(403);

  let userExists;

  try {
    userExists = await userModel.checkUserExistsByUsername(username);
  } catch (err) {
    res.status(500).json({ ERROR: err.message })
  }

  if (!userExists.rows[0].exists) {
    return res.sendStatus(403);
  }
  
  next();
} 

module.exports = {
  userExists
}