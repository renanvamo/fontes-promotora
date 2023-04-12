const projectsModel= require("../model/projects");
const getAdressByCEP = require("../model/external/getAdressAPI")

const createProject = async (req) => {
  const response = await projectsModel.createProject(req.body, req.headers);
  return response.rows[0].id;
}

const getAllProjectsByUser = async (req) => {
  const response = await projectsModel.getAllProjectsByUser(req.headers);
  return response.rows;
}

const getProjectById = async (req) => {
  let project = (await projectsModel.getProjectById(req.params));

  if (project.rowCount === 0) {
    return false;
  }

  project = project.rows[0];
  let local; 

  if (project.zip_code) {
    local = await getAdressByCEP(project.zip_code);
  }

  const response = {
    id: project.id,
    title: project.title,
    city: local.localidade || "CEP Inválido",
    uf: local.uf || "CEP Inválido",
    cost: project.cost,
    done: project.done,
    deadline: project.deadline,
    username: project.username,
    created_at: project.created_at,
    updated_at: project.updated_at 
  }

  return response;
}

const updateProjectById = async (req) => {
  const response = await projectsModel.updateProjectById(req.body, req.params);
  return response.rowCount;
}

const finalizeProjectById = async (req) => {
  const response = await projectsModel.finalizeProjectById(req.params);
  return response.rowCount;
}

const deleteProjectById = async (req) => {
  const response = await projectsModel.deleteProjectById(req.params);
  return response.rowCount;
}

module.exports = {
  createProject,
  getAllProjectsByUser,
  getProjectById,
  updateProjectById,
  finalizeProjectById,
  deleteProjectById
}
