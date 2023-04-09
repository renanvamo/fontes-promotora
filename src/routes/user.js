const userRoute = require('express').Router();
const userController = require('../controller/users.js');

userRoute.get('/users', (_req, res) => {
  res.send("Hello Fontes");
});

userRoute.post('/users', userController.createUser);

module.exports = userRoute;
