const express = require('express');
// Requires the Express module just as you require other modules and and puts it in a variable.

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes= require('./routes/api'); //First step of our attempt to use routes.
//app.use('/api',routes); //now all 4 methods is reacable from here.

//set up express app
const app = express();


//connect to mongodb
mongoose.connect('mongodb://localhost/nonjago');
mongoose.Promise= global.Promise;

// puts new Express application inside the app variable
app.use(bodyParser.json()); //1st middelware
app.use('/api',require('./routers/api'));  //2st middelware
app.use(function(err,req,res,next){ //3st middelware
  //console.log(err);
  res.status(422).send({error:err.message}); //message is a property in err object
});

//listen for request
app.listen(process.env.port || 4000,function(){
    console.log('now listening for requests');
});
