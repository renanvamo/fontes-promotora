const projectsModel= require("../model/projects");

const createProject = async (req) => {
  const response = await projectsModel.createProject(req.body);
  return response.rows[0].id;
}

module.exports = {
  createProject
}
