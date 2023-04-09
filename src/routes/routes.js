const router = require('express').Router();
const userRoute = require('./user');
const projectRouter = require('./project');

router.use(userRoute);
router.use(projectRouter);

module.exports = router;
