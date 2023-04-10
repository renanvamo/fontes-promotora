const userModel = require("../model/users");
const projectModel = require("../model/projects");

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

const userIsOwnerOfProject = async (req, res, next) => {
  const { username } = req.headers;

  if (!username) return res.sendStatus(403);

  let project;

  try {
    project = await projectModel.getProjectById(req.params);
  } catch (err) {
    res.status(500).json({ ERROR: err.message })
  }

  if (project.rowCount === 0 ) return res.status(400).json({ ERROR: "Project not found" });

  if (project.rows[0].username !== username) return res.sendStatus(401);
  
  next();
}

const isValidUserBody = (req, res, next) => {
  const { name, password, username } = req.body;
  if (!name || !password || !username) return res.status(400).json({ ERROR: "Missing/invalid field" });

  if (typeof name !== 'string' || typeof password !== 'string' || typeof username !== 'string') return res.status(400).json({ ERROR: "Invalid type field" });

  next();
}

const isValidProjectBody = (req, res, next) => {
  const { title, zip_code, deadline, cost } = req.body;
  if (!title || !zip_code || !deadline || !cost) return res.status(400).json({ ERROR: "Missing/invalid field" });

  if (typeof title !== 'string' || typeof zip_code !== 'string' || typeof deadline !== 'string' || typeof cost !== 'number') return res.status(400).json({ ERROR: "Invalid type field" });

  if (!isValidZipCodeField(zip_code)) return res.status(400).json({ ERROR: "Invalid zip_code" });

  if (!isValidDeadlineField(deadline)) return res.status(400).json({ ERROR: "Invalid deadline" });

  next();
}

const isValidDeadlineField = (deadline) => {
  const deadlineDate = new Date(deadline);
  return !isNaN(deadlineDate.getTime());
}

const isValidZipCodeField = (zipCode) => {
  const regex = /^[0-9]{8}$/;
  return regex.test(zipCode);
}

module.exports = {
  userExists,
  userIsOwnerOfProject,
  isValidUserBody,
  isValidProjectBody
}