const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// JWT Secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret'; // Fallback to a default in case it's not set

// MongoDB Atlas connection using environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourlocaldb'; // Fallback to a local DB

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Mongoose Schema and Model for Booking
const bookingSchema = new mongoose.Schema({
  date: String,
  time: String,
  photographerName: String,
  email: String,
  phoneNumber: String,
  shootingPlace: String,
  shootingLocation: String,
  meetingPoint: String,
  shootingConcept: String,
  clothingType: String,
  shoesType: String,
  itemsType: String,
  makeupType: String,
  others: String,
  password: { type: String, required: true }, // Required field
});

const Booking = mongoose.model('Booking', bookingSchema);

// Endpoint to handle booking form submission
app.post('/api/booking', async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log received data for debugging
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    // Create a new booking document with the hashed password
    const newBooking = new Booking({ ...req.body, password: hashedPassword });
    
    // Save the booking to the database
    await newBooking.save();
    
    // Send success response
    res.status(201).send('Booking saved successfully');
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).send('Error saving booking');
  }
});

// Endpoint to handle login and generate JWT token
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Booking.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Incorrect password');
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    // Respond with token and user info
    res.status(200).json({
      token,
      name: user.photographerName,
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Error logging in');
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token after "Bearer"

  if (!token) return res.status(401).send('Access denied. No token provided.');

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error("JWT verification failed:", err);
      return res.status(403).send('Invalid token.');
    }
    req.user = user;
    next();
  });
};

// Endpoint to change password (protected route)
app.post('/api/change-password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await Booking.findOne({ email: req.user.email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Incorrect current password');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).send('Password changed successfully');
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).send('Error changing password');
  }
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
