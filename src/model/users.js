const db = require('../database/connection.js');

const createUser = async (user) => {
  const createUser = ({
    text: 'INSERT INTO users (name, password, username) VALUES ($1, $2, $3) RETURNING id',
    values: [user.name, user.password, user.username]
  });

  return db.query(createUser)
}

module.exports = {
  createUser
};