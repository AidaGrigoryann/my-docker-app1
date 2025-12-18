const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongo:27017/testdb')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.get('/', (req, res) => {
  res.send('Hello from Node + MongoDB with Docker!');
});

app.listen(3000, () => console.log('🚀 Server running on port 3000'));
