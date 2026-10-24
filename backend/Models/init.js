const mongoose =require('mongoose');
const Movie = require('./movieSchema');
const movies = require('./data');
const uri= "mongodb://127.0.0.1:27017/moviebook";

const connecttodb= async()=>{
    try{
        await mongoose.connect(uri);
        console.log("connected to DB..");
        await Movie.deleteMany({});
        const result=await Movie.insertMany(movies);
        console.log("Movie inserted ..",result.length);
    }catch(error){
        console.log("mongodb connection error",error.message);
        process.exit(1);
    }

    mongoose.connection.on('disconnected',()=>{
        console.log('MongoDB diconnected. ATtempting to reconnect');
        setTimeout(connecttodb,5000);
    });

}

connecttodb();