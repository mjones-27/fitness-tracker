const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                duration: {
                    type: Number,
                    required: "Enter an exercise duration in minutes"
                },            
                distance: {                         // if exercise is cardio
                    type: Number
                }
            }
        ]
    });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;