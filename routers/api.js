const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get list of ninjas from db
router.get('/ninjas',function(req,res,next){
    res.send({type: 'GET'});
});

//add a new ninja to db
router.post('/ninjas',function(req,res,next){
// var ninja = new Ninja(req.body);
//     ninja.save(); //saved in ninja collection.

    Ninja.create(req.body).then(function(ninja){ // object was created in the Ninja table. Once it created, only 'then' we return
      res.send(ninja); //that returns a promise.
    }).catch(next)

});

//update a ninja in db
router.put('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
      Ninja.findOne({_id:req.params.id}).then(function(ninja) {
          res.send(ninja);
      });
  });
});

//delete a ninja from database
router.delete('/ninjas/:id',function(req,res,next){
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
      res.send(ninja);
    });

});

module.exports = router;
