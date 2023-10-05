require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo'); 



const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());

// Cookie session
app.use(session({
    secret: 'Keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    })
}))

app.use(express.static('public'));

// Templating Engine 
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));


const PORT = 3000 || process.env.PORT  ;
connectDB();

app.listen(PORT, () => { console.log(`App listening on port: ${PORT}`)
});

