const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
//newsController.index;

router.use('/me/stored/courses', meController.storedCourses);

module.exports = router;