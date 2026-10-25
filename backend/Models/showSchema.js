const mongoose = require("mongoose");

const showScehma= new mongoose.Schema({
    MovieId:{
        type:String,
        required:true,
    },
    showdate:{
        type:String,
        required:true,
    },
    showtime:{
        type:String,
        required:true
    },
    threaterName:{
        type:String,
        required:true,
    },
    threaterId:{
        type:String,
        required:true,
    },
},{timestamps:true});

module.exports = mongoose.model('Show',showScehma);