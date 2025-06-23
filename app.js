const express = require('express');
const app = express();
const PORT = 3000;

const itemRoutes = require('./routes/items');

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use item routes for all /items paths
app.use('/items', itemRoutes);

// Handle 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
