const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now()
    },
    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "Enter name of exercise"
        }, 
        duration: {
          type: String,
          trim: true,
          required:"Enter the exercise duration in minutes"
        },
         weight:{
           type: Number,
         },
         sets:{
          type: Number,
        },
         reps:{
          type: Number,
        },
         distance:{
          type: Number,
        }
      }
    ],
 
  }
);
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;