const Course = require('../models/course.model');


//Create Course
exports.course_create = async (req, res) => {
    try {
        console.log(req.body);
        const newCourse = new Course();
        console.log(req.body.name);
        newCourse.name = req.body.name;
        newCourse.credithour = req.body.credithour;
        
        await newCourse.save();
        res.send({
            "Added": true
        })
    } catch (error) {
        console.log("Error while creating course " + error)
    }
};



// exports.course_create = function (req, res) {
//     let course = new Course(
//         {
//             name: req.body.name,
//             credithour: req.body.credithour
//         }
//     );
//     course.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Course Created successfully')
//     })
// };

//Retrieve All Course 
exports.all_course = async (req, res) => {
    Course.find()
    .then(course => {
        res.send(course);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving courses."
        });
    });
};

//Just for Testing
exports.test = function (req, res) {
    res.send('Greetings from the Course Test controller!');
};