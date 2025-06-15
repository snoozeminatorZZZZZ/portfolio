const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Add this after your existing routes in backend/index.js
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

const axios = require('axios');

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct',
      { inputs: message },
      { headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` } }
    );
    res.json({ reply: response.data[0].generated_text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
