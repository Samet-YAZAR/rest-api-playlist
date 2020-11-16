const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninha Schema & model
const NinjaSchema = new Schema ({

  name: {
    type:String,
    required :[true, 'Name field is required']
  },
  rank: {
    type:String,
  },
  availability: {
    type:Boolean,
    default:false
  }
  //add in geo location

});
//add collection /like table
const Ninja = mongoose.model('ninja',NinjaSchema);
// Ninja table i created, mongoose contains many tables inside, and we defined as 'ninja' named
//table shaped by NinjaSchema. And we assigned it to a referance
module.exports = Ninja;
//For its reacablity we export it.
