const express = require('express');
const router = express.Router();


const trainer_controller = require('../controllers/trainer.controller');


//service for testing
router.get('/test', trainer_controller.test);
//service that create trainer
router.post('/create', trainer_controller.trainer_create);
//service that provides all trainers
router.get('/provide-all', trainer_controller.all_trainer);
module.exports = router;