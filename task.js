const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: String,
  title: String
});

module.exports = mongoose.model("Task", TaskSchema);
