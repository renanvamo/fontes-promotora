const userRoute = require('express').Router();

userRoute.get('/users', (req, res) => {
  res.send("Hello Fontes")
});

module.exports = userRoute;
