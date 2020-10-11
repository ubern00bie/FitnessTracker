const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// app.get("/exercise", function(req, res) {
//     res.sendFile(path.join(__dirname, "./exercise.html"));
// });

// app.get("/stats", function(req, res) {
//     res.sendFile(path.join(__dirname, "./stats.html"));
// });

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./index.html"));
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
