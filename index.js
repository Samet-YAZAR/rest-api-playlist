const express = require('express');
// Requires the Express module just as you require other modules and and puts it in a variable.

const bodyParser = require('body-parser');

//const routes= require('./routes/api'); //First step of our attempt to use routes.
//app.use('/api',routes); //now all 4 methods is reacable from here.

//set up express app
const app = express();
// puts new Express application inside the app variable
app.use(bodyParser.json());
app.use('/api',require('./routers/api'));


//listen for request
app.listen(process.env.port || 4000,function(){
    console.log('now listening for requests');
});
