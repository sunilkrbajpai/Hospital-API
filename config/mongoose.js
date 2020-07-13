const mongoose = require("mongoose");

// connect mongoDB
mongoose.connect("mongodb://localhost/hospital-api-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const db = mongoose.connection;

// on error
db.on("error", console.error.bind(console, "Error connecting to mongo DB"));

//on connection
db.once("open", () => {
  console.log("Database connected!:: MONGODB");
});

// export db
module.exports = db;