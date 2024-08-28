const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 4000;
app.use(
  cors({
    origin: ["https://yourhr-jobboard.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "auth-token"],
  })
);
app.use(express.json());

// Database Connection with MongoDB
mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// PDF Storage Engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user_resume",
    allowed_formats: ["pdf"],
    public_id: (req, file) => `${file.fieldname}_${Date.now()}.pdf`,
  },
});

const upload = multer({ storage: storage });

// Schema for Creating Users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  skills: {
    type: [String],
    validate: [arrayLimit, "{PATH} exceeds the limit of 10"],
    required: true,
  },
  resumeUrl: { type: String, required: true },
});

function arrayLimit(val) {
  return val.length <= 10;
}

const User = mongoose.model("User", userSchema);

// Endpoint for Signing Up a User
app.post("/signin", upload.single("pdf"), async (req, res) => {
  try {
    const { name, phone, email, password, dateOfBirth, skills } = req.body;
    const resumeUrl = req.file?.path;

    if (!resumeUrl) {
      return res.status(400).json({ error: "Resume file is required." });
    }

    // Hash the password before saving
    const user = new User({
      name,
      phone,
      email,
      password: password,
      dateOfBirth,
      skills: JSON.parse(skills), // Parse JSON string to array
      resumeUrl,
    });

    await user.save();

    // Generate a JWT token
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to register user." });
  }
});

// Endpoint for User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, errors: "Email and password are required." });
  }

  try {
    let user = await User.findOne({ email });

    if (user && user.password === password) {
      // Consider using a hashed password check
      const data = { user: { id: user.id } };
      const token = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res
        .status(401)
        .json({ success: false, errors: "Invalid email or password." });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to login." });
  }
});

// Endpoint to Get All Users' Names
app.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find().select("name -_id"); // Fetch only the 'name' field, excluding '_id'
    const names = users.map((user) => user.name); // Extract names from the array of user objects
    res.json(names); // Send the array of names as the response
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to fetch users." });
  }
});

// Root Endpoint
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.listen(port, () => {});
