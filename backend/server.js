const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require("@google/generative-ai"); // Import the library
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Gemini API Initialization
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Choose your model

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/chatbot', require('./routes/chatbotRoutes'));

// New Gemini API Endpoint
app.post('/api/gemini-query', async (req, res) => {
  try {
    const userPrompt = req.body.query;
    if (!userPrompt) {
      return res.status(400).json({ message: "Query is required." });
    }
    const prompt = `Answer the following question as if you were a vegetable chatbot:\n\n${userPrompt}`
    const result = await model.generateContent(prompt);

    const response = result.response;
    const textResponse = response.text();
    res.json({ response: textResponse });

  } catch (error) {
    console.error("Error from Gemini API: ", error); // It's good to log the error.
    res.status(500).json({ message: 'Error fetching data from Gemini API' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));