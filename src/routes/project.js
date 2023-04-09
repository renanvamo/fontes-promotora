const projectRouter = require('express').Router();
const projectsController = require('../controller/projects');

projectRouter.post('/project', projectsController.createProject);

// userRoute.get('/projects', projectsController.getAllProjectsByUser);

// userRoute.get('/project', projectsController.getProjectById);

// userRoute.put('/projects/:id', projectsController.updateProjectById)

// userRoute.patch('/projects/:id/done', projectsController.finalizeProjectById)

// userRoute.delete('/projects/:id', projectsController.deleteProjectById)

module.exports = projectRouter;