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
        _id:{
          type: Schema.Types.ObjectId,
          required: true
        },
        name: {
          type: String,
          trim: true,
          required: "Enter name of exercise"
        }, 
        type: {
          type: String
        },
        duration: {
          type: Number,
          trim: true,
          default: 0
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
          type: Number
        }
      }
    ],
    totalDuration:{
      type: String
    }
 
  }
);
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;