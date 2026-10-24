const mongoose = require('mongoose');

const AdminSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    Threaterid:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Threater',
    }]
});

export default Admin = new mongoose.model('Admin',AdminSchema)