const mongoose=require('mongoose');

exports.connectMongoose=()=>{
    mongoose
        .connect("mongodb://localhost:27017/rctprojdb1")
        .then((e)=>console.log(`Database connected at ${e.connection.host}`))
        .catch((e)=>console.log(e));
};

const userschema= new mongoose.Schema({

    name:String,
    email:{
        type:String,
        required: true,
        unique:true
    },
    password: String

});

exports.User=mongoose.model("User",userschema);