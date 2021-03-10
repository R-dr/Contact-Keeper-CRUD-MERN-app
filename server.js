const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Database Connection
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the jungle' }));

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Port
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
