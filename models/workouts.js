const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    reps: {
        type: Boolean,
        required: false
    }
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = { Workout }