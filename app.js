require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');


const app = express();

app.use(express.static('public'));

// Templating Engine 
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/main'));

const PORT = 3000 || process.env.PORT  ;
connectDB();

app.listen(PORT, console.log(`App listening on port: ${PORT}`));

