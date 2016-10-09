var mongoose = require('mongoose');

var CandidateSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  },
  gender : {
    type : String
  },
  email : {
    type : String,
    required : true
  },
  phone : {
    type : String,
  },
  birthdate : {
    type : Date
  },
  programmingExp : {
    type : Boolean  
  },
  educationLevel : {
    type : String
  },
  englishLevel : {
    type : String
  },
  otherTrainning : {
    type : String
  }
});

var Candidate = mongoose.model('Candidate', CandidateSchema);
module.exports = Candidate;