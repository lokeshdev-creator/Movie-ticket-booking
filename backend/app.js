const express=require('express');
const app=express();
const mongoose = require('mongoose');
const port =4000;

//mongoodb conneciton
const uri= "mongodb://127.0.0.1:27017/moviebook";

main().then(()=>{
    console.log("DB Connected...");
}).catch((err)=>{
    console.log("Some connection error came",err.message);
})

async function main(){
    mongoose.connect(uri);
}

const cors=require('cors');
const Movie = require('./Models/movieSchema');
const Threatre = require('./Models/Threatre');
const Show = require('./Models/showSchema');

app.use(cors());
app.use(express.json());

//route to create a new threater
app.post('/addthreater',async(req,res)=>{
    try{
       const data=req.body;
    const response=await Threatre.insertOne(data);
    return res.status(200).json({success:true,message:"threater add successfully"}); 
    }catch(err){
        console.log(err);
        if(err.name=='validationError'){
            const msg=Object.values(err.errors).map(err=>err.message);
            return res.status(400).json({
                success:false,
                message:`Validation Error:${msg.join(',')}`
            });
        }
    }
    res.status(500).json({ 
            success: false, 
            message: "An internal server error occurred." 
        });
    
});

// route to add show
app.post('/addshow',async(req,res)=>{
    try{
    const data=req.body;
    console.log(data);
    const response = await Show.insertOne(data);
     console.log(response);
    return res.status(200).json({success:true,message:"show add successfully"});
    }catch(err){
        console.log(err);
        if(err.name=='validationError'){
            const msg=Object.values(err.errors).map(err=>err.message);
            return res.status(400).json({
                success:false,
                message:`Validation Error:${msg.join(',')}`
            });
        }
    }

     res.status(500).json({ 
            success: false, 
            message: "An internal server error occurred." 
        });
    
})

app.get('/shows/:movieid',(req,res)=>{

})

app.listen(port,()=>{ 
    console.log("app listing");
})