const router = require('express').Router();
const userRoute = require('./user');
const projectRoute = require('./project');

router.use(userRoute);
router.use(projectRoute);

module.exports = router;
