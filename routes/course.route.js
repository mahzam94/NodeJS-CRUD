const express = require('express');
const router = express.Router();


const course_controller = require('../controllers/course.controller');


//service for testing.
router.get('/test', course_controller.test);
//service that create courses
router.post('/create', course_controller.course_create);
//service that provides all courses 
router.get('/provide-all', course_controller.all_course);
module.exports = router;