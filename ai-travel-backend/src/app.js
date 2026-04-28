const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');
const errorMiddleware = require('./shared/middleware/error.middleware');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get('/', (req, res) => {
  res.send('AI Travel Management System API 🚀');
});

// Test Route
app.get('/test', (req, res) => {
  res.send('Test route is working! 🚀');
});

// API Routes
app.use('/api', routes);


// Error Handling
app.use(errorMiddleware);

module.exports = app;
