import express from "express";
import cors from 'cors'
import issuanceRoot from './routes/issuanceRoutes.js'
import './config.js'
import dotenv from 'dotenv'
const app = express();
const port = process.env.PORT;
dotenv.config()
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:5173','https://kube-credential.kptech.online'],
    methods: 'GET,POST,PUT,PATCH,DELETE,HEAD',
    credentials:true
}))

app.use('/',issuanceRoot)



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 