const projectRouter = require('express').Router();
const projectsController = require('../controller/projects');
const validations = require('../middlewares/validations');

projectRouter.post('/project',
  validations.isValidProjectBody,
  validations.userExists,
  projectsController.createProject
);

projectRouter.get('/projects',
  validations.userExists,
  projectsController.getAllProjectsByUser
);

projectRouter.get('/project/:id', 
  projectsController.getProjectById
);

projectRouter.put('/projects/:id',
  validations.isValidProjectBody,
  validations.userExists,
  validations.userIsOwnerOfProject,
  projectsController.updateProjectById
);

projectRouter.patch('/projects/:id/done', 
  validations.userExists,
  validations.userIsOwnerOfProject,
  projectsController.finalizeProjectById
);

projectRouter.delete('/projects/:id',
  validations.userExists,
  validations.userIsOwnerOfProject,
  projectsController.deleteProjectById
);

module.exports = projectRouter;