const projectsService = require("../service/projects");

const createProject = async (req, res) => {
  try {
    const id = await projectsService.createUser(req);
    res.status(201).json({ id });
    
  } catch (err) {
    res.status(500).json({ ERROR: err.message })
  }
}

module.exports = {
  createProject
}