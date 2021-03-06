const mongoose = require("mongoose");

mongoose.connect(process.env.CON_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

const postSchema = new mongoose.Schema({
  id: String,
  attachments: Array,
  date: Date,
  urlType: String,
  text: String,
});

module.exports = mongoose.model("Post", postSchema);
