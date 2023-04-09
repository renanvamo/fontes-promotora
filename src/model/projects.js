const db = require('../database/connection.js');

const createProject = async (body, header) => {
  const createProject = ({
    text: 'INSERT INTO projects (title, zip_code, deadline, cost, username) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    values: [body.title, body.code, body.deadline, body.cost, header.username]
  });

  return db.query(createProject);
}

const getAllProjectsByUser = async (body) => {
  const getAllProjectsByUser = ({
    text: 'SELECT * FROM projects WHERE username = $1',
    values: [body.username]
  });

  return db.query(getAllProjectsByUser)
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
};