const routes = require('express').Router();

routes.get('/users', (req, res) => {
  res.send("Hello Fontes")
});

module.exports = routes;
