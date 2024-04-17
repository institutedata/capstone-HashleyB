const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainingSessionSchema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: 'ClientProfile', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true }
});

module.exports = mongoose.model("trainingSession", trainingSessionSchema);
