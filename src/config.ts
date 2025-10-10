import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"

const MONGOURI = process.env.MONGOURI; // type: string | undefined
if (!MONGOURI) throw new Error("MONGOURI not set");


mongoose
.connect(MONGOURI)
.then(() => console.log('MongoDB connected successfully!'))
.catch((err :any)=>console.log('Error connecting mongodb',err))