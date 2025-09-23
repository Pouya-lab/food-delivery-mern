import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv";
import foodRouter from "./routes/foodRoute.js";

//connecting for the .env file to the server
dotenv.config();

//app config
const app = express()
const port = 4000

// middleware

app.use(express.json())

//db connection for the connection in the import shuld always write db.js not db alone
connectDB()

//api endpoint
app.use("/api/food" , foodRouter)
app.use("/images" , express.static('uploads'))

//accessing backend from frontend using cors
app.use( cors() )


app.get("/" , ( req , res )=>{
    res.send("hello world")
})

app.listen( port , ()=>{
    console.log(`Server started on http://localhost:${port}`);
    
} )