// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple home route
app.get('/', (req, res) => {
  res.send('🚀 Node.js App is running locally!');
});

// Example API endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

// Start the server
app.listen(port,"0.0.0.0", () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});
