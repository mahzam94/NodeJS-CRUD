const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CourseSchema = new Schema({
    name: String,
    credithour: Number
    
});


// Export the model
module.exports = mongoose.model('Course', CourseSchema);