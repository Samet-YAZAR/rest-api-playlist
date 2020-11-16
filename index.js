const express = require('express');
// Requires the Express module just as you require other modules and and puts it in a variable.

//set up express app
const app = express();
// puts new Express application inside the app variable

app.get('/',function(req,res){
    console.log('GET requests');
    //res.end();
    res.send({name: 'Samet'});
});

//listen for request
app.listen(process.env.port || 4000,function(){
    console.log('now listening for requests');
});
