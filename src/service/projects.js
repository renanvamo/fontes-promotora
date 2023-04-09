const projectsModel= require("../model/projects");

const createProject = async (req) => {
  const response = await projectsModel.createProject(req.body, req.header);
  return response.rows[0].id;
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
