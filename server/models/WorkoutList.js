const { Schema, model } = require('mongoose');

const workoutSchema  = new Schema (
    {
        workoutText: {
            type: String,
            required: 'Enter a workout!',
            minlength: 1,
            maxlength: 40,
        },
        completed: {
            type: Boolean,
            default: false
        },
        username: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Workouts = model('Workouts', workoutSchema);

module.exports = Workouts;