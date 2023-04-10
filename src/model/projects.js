const db = require('../database/connection.js');

const createProject = async (body, headers) => {
  const createProject = ({
    text: 'INSERT INTO projects (title, zip_code, deadline, cost, username) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    values: [body.title, body.zip_code, body.deadline, body.cost, headers.username]
  });

  return db.query(createProject);
}

const getAllProjectsByUser = async (headers) => {
  const getAllProjectsByUser = ({
    text: 'SELECT * FROM projects WHERE username = $1',
    values: [headers.username]
  });

  return db.query(getAllProjectsByUser);
}

const getProjectById = async (params) => {
  const getProjectById = ({
    text: 'SELECT * FROM projects WHERE id = $1',
    values: [params.id]
  });

  return db.query(getProjectById);
}

const updateProjectById = async (body, params) => {
  const updateProjectById = ({
    text: 'UPDATE projects SET title = $1, zip_code = $2, cost = $3, deadline = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5',
    values: [body.title, body.zip_code, body.cost, body.deadline, params.id]
  });

  return db.query(updateProjectById);
}

const finalizeProjectById = async (params) => {
  console.log(params.id);
  const finalizeProjectById = ({
    text: 'UPDATE projects SET done = true, updated_at = CURRENT_TIMESTAMP WHERE id = $1',
    values: [params.id]
  });

  return db.query(finalizeProjectById);
}

const deleteProjectById = async (params) => {
  const deleteProjectById = ({
    text: 'DELETE FROM projects WHERE id = $1',
    values: [params.id]
  });

  return db.query(deleteProjectById);
}

module.exports = {
  createProject,
  getAllProjectsByUser,
  getProjectById,
  updateProjectById,
  finalizeProjectById,
  deleteProjectById
};