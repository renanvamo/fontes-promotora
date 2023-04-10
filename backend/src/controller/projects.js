const projectsService = require("../service/projects");

const createProject = async (req, res) => {
  try {
    const id = await projectsService.createProject(req);
    return res.status(201).json({ id });
    
  } catch (err) {
    return res.status(500).json({ ERROR: err.message })
  }
}

const getAllProjectsByUser = async (req, res) => {
  try {
    const projects = await projectsService.getAllProjectsByUser(req);
    return res.status(200).json({ projects });
    
  } catch (err) {
    return res.status(500).json({ ERROR: err.message })
  }
}

const getProjectById = async (req, res) => {
  try {
    const project = await projectsService.getProjectById(req);

    if (!project) return res.status(400).json({ ERROR: "Project not found" })
    return res.status(200).json({ project });
    
  } catch (err) {
    return res.status(500).json({ ERROR: err.message })
  }
}

const updateProjectById = async (req, res) => {
  try {
    const wasUpdated = await projectsService.updateProjectById(req);

    if (!wasUpdated) return res.sendStatus(304);

    return res.sendStatus(200);
    
  } catch (err) {
    res.status(500).json({ ERROR: err.message })
  }
}

const finalizeProjectById = async (req, res) => {
  try {
    const wasFinished = await projectsService.finalizeProjectById(req);

    if (!wasFinished) return res.sendStatus(304);
    
    return res.sendStatus(200);
    
  } catch (err) {
    return res.status(500).json({ ERROR: err.message })
  }
}

const deleteProjectById = async (req, res) => {
  try {
    await projectsService.deleteProjectById(req);
    return res.sendStatus(204);
    
  } catch (err) {
    return res.status(500).json({ ERROR: err.message })
  }
}

module.exports = {
  createProject,
  getAllProjectsByUser,
  getProjectById,
  updateProjectById,
  finalizeProjectById,
  deleteProjectById
}