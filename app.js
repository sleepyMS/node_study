const express = require("express");
const helmet = require("helmet");
const ejs = require("ejs");
const db = require('./model/db')
const app = express();

// ################################# middle ware start #################################
// security
// app.use(helmet());

// post API : get body
app.use(express.json());
app.use(express.urlencoded());

// get router
const mainRouter = require('./router/mainRouter')
app.use('/me-in-sk', mainRouter)

// get view
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(__dirname + '/public'));
// ################################# middle ware done #################################

// ################################# surver start #################################
// surver open : (npm start) -> (ctrl + c)
app.listen(3000, function(req, res){

    db.sequelize.sync({force: false});
    console.log("surver print");
})
// ################################# surver done #################################
