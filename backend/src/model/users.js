const db = require('../database/connection.js');

const createUser = async (body) => {
  const createUser = ({
    text: 'INSERT INTO users (name, password, username) VALUES ($1, $2, $3) RETURNING username',
    values: [body.name, body.password, body.username]
  });

  return db.query(createUser);
}

const checkUserExistsByUsername = async (username) => {
  const checkUserExistsByUsername = ({
    text: 'SELECT EXISTS(SELECT 1 FROM USERS WHERE username = $1)',
    values: [username]
  });

  return db.query(checkUserExistsByUsername);
}

module.exports = {
  createUser,
  checkUserExistsByUsername
};