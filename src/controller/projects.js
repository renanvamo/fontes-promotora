const projectsService = require("../service/projects");

const createProject = async (req, res) => {
  try {
    const id = await projectsService.createProject(req);
    res.status(201).json({ id });
    
  } catch (err) {
    res.status(500).json({ ERROR: err.message })
  }
}

const getAllProjectsByUser = async () => {
  
}

const getProjectById = async () => {
  
}

const updateProjectById = async () => {
  
}

const finalizeProjectById = async () => {
  
}

const deleteProjectById = async () => {
  
}

module.exports = {
  createProject,
  getAllProjectsByUser,
  getProjectById,
  updateProjectById,
  finalizeProjectById,
  deleteProjectById
}