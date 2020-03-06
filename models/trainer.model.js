const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TrainerSchema = new Schema({
    name: String,
    phone: Number,
    address: String
});


// Export the model
module.exports = mongoose.model('Trainer', TrainerSchema);