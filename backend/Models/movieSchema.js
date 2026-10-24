const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    moviename:{
        type:String,
        required:[true,"Movie name is required"],
        trim:true,
        min:3,
        max:200,
        unique:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:[true,"Description is required"],
        trim:true,
        minlength:[100,"Description must be at least 10 characters long"],
    },
    genres:{
        type:[String],
        required:[true,"AT least one genre is required"],
    },
    releaseDate:{
        type:Date,
        required:[true,"Release date is required"],

    }
});

module.exports = mongoose.model("Movie",movieSchema);