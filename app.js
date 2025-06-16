// var createError = require('http-errors');
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes=require('./routes/product')
const authRoutes=require('./routes/auth')

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT =3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}!`);
});

module.exports = app;
