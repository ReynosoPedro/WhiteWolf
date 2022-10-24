const express= require ('express');
const path = require ('path');
const methodOverride = require('method-override');
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
let app =express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath) );
app.set('view engine', 'ejs');

app.use(session({
    secret : 'topSecret',
    resave: false,
    saveUninitialized: false,
}))

app.use(userLoggedMiddleware);

app.listen(process.env.PORT || 3050 , function (){
    console.log("Server up and running port 3050");
})



