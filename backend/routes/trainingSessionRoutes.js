const express = require("express");
const router = express.Router();
const trainingSessionController = require("../controllers/trainingSessionController");

// GET route to retrieve all training sessions
router.get("/", trainingSessionController.getAllTrainingSessions);

// POST route to book a new training session
router.post("/book", trainingSessionController.bookTrainingSession);

// PUT route to update a training session
router.put("/:id", trainingSessionController.updateTrainingSession);

// DELETE route to delete a training session
router.delete("/:id", trainingSessionController.deleteTrainingSession);

module.exports = router;
