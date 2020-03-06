const Trainer = require('../models/trainer.model');

//Create Trainer
exports.trainer_create = async (req, res) => {
    let trainer = new Trainer(
        {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address
        }
    );
    course.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Trainer Created successfully')
    })
};

//Retrieve All Trainers 
exports.all_trainer = async (req, res) => {
    Trainer.find()
    .then(trainer => {
        res.send(trainer);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving trainers."
        });
    });
};

//Just for Testing
exports.test = function (req, res) {
    res.send('Greetings from the Trainer Test controller!');
};