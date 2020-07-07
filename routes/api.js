const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", function (req, res) {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

router.get("/api/workouts", function (req, res) {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});



module.exports = router;