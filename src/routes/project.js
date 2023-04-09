const projectRouter = require('express').Router();
const projectsController = require('../controller/projects');
const checkMiddleware = require('../middlewares/checkUsername');

projectRouter.post('/project', checkMiddleware.userExists, projectsController.createProject);

projectRouter.get('/projects', projectsController.getAllProjectsByUser);

projectRouter.get('/project', projectsController.getProjectById);

projectRouter.put('/projects/:id', projectsController.updateProjectById)

projectRouter.patch('/projects/:id/done', projectsController.finalizeProjectById)

projectRouter.delete('/projects/:id', projectsController.deleteProjectById)

module.exports = projectRouter;