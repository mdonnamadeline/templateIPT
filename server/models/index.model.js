const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require('multer');
const sharp = require('sharp');
const Admin = require("./Admin.model");
const Menu = require("./Menu.model");

app.use(cors());
app.use(bodyParser.json());

const upload = multer({ storage: multer.memoryStorage() });

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//Add for SignUp
app.post("/addAdmin", async (req, res) => {
  const { AdminID, Password } = req.body;
  try {
    const admin = new Admin({ AdminID, Password });
    await admin.save();
    res.json({ success: true, message: "Admin added successfully!" });
  } catch (error) {
    console.error("Error adding admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get Admin for login
app.get("/viewAdmin", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error("Error fetching Admin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Upload Menu
app.put("/update-menu/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
  
    try {
      const result = await Menu.findByIdAndUpdate(id, { Name: name, Price: price, Description: description }, { new: true });
      if (result) {
        res.send({ status: "ok", message: "Menu updated successfully", data: result });
      } else {
        res.status(404).send({ status: "error", message: "Menu not found" });
      }
    } catch (error) {
      console.error("Error updating menu:", error);
      res.status(500).send({ status: "error", message: error.message });
    }
  });

//Display Menu
app.get("/get-menu", async (req, res) => {
  try {
    const data = await Menu.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// Delete endpoint
app.delete("/delete-menu/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Menu.findByIdAndDelete(id);
    if (result) {
      res.send({ status: "ok", message: "Menu deleted successfully" });
    } else {
      res.status(404).send({ status: "error", message: "Menu not found" });
    }
  } catch (error) {
    console.error("Error deleting menu:", error);
    res.status(500).send({ status: "error", message: error.message });
  }
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
