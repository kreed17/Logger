const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
// const log = require('./data');

//Connect to database
const connectDB = require('./config/db');
connectDB();

const app = express();

//routes
const log = require('./routes/logger');

app.use(cors());
//Middleware for data on post request:
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
    res.send("Server Up and Running")
})

//use routes
app.use('/api/log', log);

//setting up PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => (
    console.log(`Server runnning on PORT ${PORT}`)
))