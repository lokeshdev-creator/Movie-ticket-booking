const mongoose = require("mongoose");

const showScehma= new mongoose.Schema({
    tmdbMovieId:{
        type:String,
        require:true,
        index:true
    },
    showdate:{
        type:String,
        required:true,
    },
    showtime:{
        type:String,
        required:true
    },
    threatreName:{
        type:String,
        require:true,
    },
    threatreid:{
        type:String,
        require:true,
        unique:true
    },
},{timestamps:true});

module.exports = mongoose.model('Show',showScehma);