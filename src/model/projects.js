const db = require('../database/connection.js');

const createProject = async (user) => {
  const createUser = ({
    text: 'INSERT INTO users (name, password, username) VALUES ($1, $2, $3) RETURNING id',
    values: [user.name, user.password, user.username]
  });

  return db.query(createUser)
}

module.exports = {
  createProject
};