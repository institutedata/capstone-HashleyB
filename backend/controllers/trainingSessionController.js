const TrainingSession = require("../models/trainingSession");

const bookTrainingSession = (req, res) => {
  const { client, date, startTime, endTime } = req.body;
  
  const newTrainingSession = new TrainingSession({
    client,
    date,
    startTime,
    endTime
  });

  newTrainingSession.save()
    .then(savedSession => {
      res.status(201).json(savedSession);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not book training session" });
    });
};

const updateTrainingSession = (req, res) => {
  const { date, startTime, endTime } = req.body;

  TrainingSession.findByIdAndUpdate(req.params.id, { date, startTime, endTime }, { new: true })
    .then(updatedSession => {
      res.status(200).json(updatedSession);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not update training session" });
    });
};

const deleteTrainingSession = (req, res) => {
  TrainingSession.findByIdAndDelete(req.params.id)
    .then(deletedSession => {
      res.status(200).json(deletedSession);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not delete training session" });
    });
};

const getAllTrainingSessions = (req, res) => {
  TrainingSession.find()
    .populate("client") // Populate the client reference field
    .then(sessions => {
      res.status(200).json(sessions);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not fetch training sessions" });
    });
};

module.exports = {
  bookTrainingSession,
  updateTrainingSession,
  deleteTrainingSession,
  getAllTrainingSessions
};
