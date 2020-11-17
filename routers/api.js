const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get list of ninjas from db
router.get('/ninjas',function(req,res){
    res.send({type: 'GET'});
});

//add a new ninja to db
router.post('/ninjas',function(req,res){
// var ninja = new Ninja(req.body);
//     ninja.save(); //saved in ninja collection.

    Ninja.create(req.body).then(function(ninja){ // object was created in the Ninja table. Once it created, only 'then' we return
      res.send(ninja);
    });

});

//update a ninja in db
router.put('/ninjas/:id',function(req,res){
    res.send({type: 'PUT'});
});

//delete a ninja from database
router.delete('/ninjas/:id',function(req,res){
    res.send({type: 'DELETE'});
});

module.exports = router;
