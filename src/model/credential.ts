import mongoose from "mongoose";

const CredentialSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    issuedAt:{
        type:Number,
        required:true
    },
    workerId:{
        type:String,
        required:true
    }

})

export const Credential = mongoose.model('Credential',CredentialSchema)
