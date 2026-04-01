const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: () => Date()
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;