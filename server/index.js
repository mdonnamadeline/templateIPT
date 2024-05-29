const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const Poster = require('./models/poster.model');

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Multer storage setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Database setup
const dbName = "poster-data";
const port = 1337;

mongoose.connect("mongodb://localhost:27017/" + dbName, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection error", err));

// Server setup
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Upload Poster
app.post('/post-films', upload.single('poster'), async (req, res) => {
  try {
      const { title, director, releaseYear, logline } = req.body;
      const image = req.file.buffer.toString('base64');

      const newFilm = new Poster({ title, director, releaseYear, logline, image });
      await newFilm.save();

      res.status(201).send({ status: 'ok', message: 'Film poster added successfully', data: newFilm });
  } catch (error) {
      console.error('Error uploading film poster:', error);
      res.status(500).send({ status: 'error', message: error.message });
  }
});

// Display Posters
app.get("/get-films", async (req, res) => {
  try {
      const data = await Poster.find({});
      res.send({ status: "ok", data: data });
  } catch (error) {
      res.status(500).send({ status: "error", message: error.message });
  }
});

// Delete Poster
app.delete("/delete-films/:id", async (req, res) => {
  const { id } = req.params;
  try {
      const result = await Poster.findByIdAndDelete(id);
      if (result) {
          res.send({ status: "ok", message: "Poster deleted successfully" });
      } else {
          res.status(404).send({ status: "error", message: "Poster not found" });
      }
  } catch (error) {
      console.error("Error deleting poster:", error);
      res.status(500).send({ status: "error", message: error.message });
  }
});

// Update Poster
app.put('/put-films/:id', upload.single('poster'), async (req, res) => {
  const { id } = req.params;
  const { title, director, releaseYear, logline } = req.body;

  let updateFields = { title, director, releaseYear, logline };

  if (req.file) {
      const image = req.file.buffer.toString('base64');
      updateFields.image = image;
  }

  try {
      const updatedPoster = await Poster.findByIdAndUpdate(id, updateFields, { new: true, runValidators: true });
      if (!updatedPoster) {
          return res.status(404).send({ status: 'error', message: 'Poster not found' });
      }
      res.send({ status: 'ok', data: updatedPoster });
  } catch (error) {
      res.status(400).send({ status: 'error', message: error.message });
  }
});