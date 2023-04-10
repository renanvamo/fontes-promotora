const userRoute = require('express').Router();
const userController = require('../controller/users.js');
const validations = require('../middlewares/validations.js')

userRoute.get('/users', (_req, res) => {
  res.send("Hello Fontes");
});

userRoute.post('/users', validations.isValidUserBody, userController.createUser);

module.exports = userRoute;
