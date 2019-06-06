const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Connect to database
mongoose.connect(
  "mongodb://localhost:27017/image-manager",
  {
    useNewUrlParser: true
  },
  err => {
    if (err) console.error("Error: ", err);

    console.log("Connected to MongoDB");
  }
);
//Setup Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
//Controllers
const ImageController = require("./controllers/ImageController");
//APi routes
app.post("/upload", ImageController.uploadImage);
app.listen(3000, () => console.log("Server has started 3000"));
