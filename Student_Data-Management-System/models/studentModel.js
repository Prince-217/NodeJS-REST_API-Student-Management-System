import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        trim:true,
        required:true,
    },
    category:{
        type:String,
        trim:true,
        required:true,
    },
    
}, {timestamps: true});

export default mongoose.model("Student", studentSchema);