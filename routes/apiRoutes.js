var db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    app.post("/api/workouts", async (req, res)=> {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error occurred creating a workout: ", err)
        }
    })

    app.put("/api/workouts/:id", function(req, res){
        Workout.findByIdAndUpdate(
            req.params.id,
            {$push: {
                exercises: req.body
            }}
        ).then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 

    app.post("/api/workouts", function(req, res) {
        Workout.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })
};