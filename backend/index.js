const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Simple endpoint
app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
