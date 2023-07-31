// require('.dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');


const app = express();

app.use(express.static('public'))

// Templating Engine 
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

// Routes
app.use('/', require('./server/routes/main'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`App listening on port: ${PORT}`));

