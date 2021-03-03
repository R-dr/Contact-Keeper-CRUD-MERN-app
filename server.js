const express = require('express');
const connectDB = require('./config/db');

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

//Port
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
