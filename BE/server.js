const express = require('express');
const mongoose = require('mongoose');
const app = express();

// These match the names we will use in our Kubernetes ConfigMaps/Secrets
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/testdb';

// Database Connection
mongoose.connect(DB_URL)
  .then(() => console.log('✅ Connected to MongoDB Successfully!'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.get('/', (row, res) => {
  res.send('Backend API is Running...');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'up', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});