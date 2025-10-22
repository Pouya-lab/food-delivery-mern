import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import  cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//connecting for the .env file to the server
dotenv.config();

//app config
const app = express()
const port = 4000

//accessing backend from frontend using cors and also should be on top so it would run correctly
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server
  })
);

// middleware

app.use(express.json())

//db connection for the connection in the import shuld always write db.js not db alone
connectDB()

//api endpoint
app.use("/api/food" , foodRouter)
app.use("/images" , express.static('uploads'))
app.use("/api/user" , userRouter)
app.use("/api/cart" , cartRouter)
app.use("/api/order" , orderRouter)


app.get("/" , ( req , res )=>{
    res.send("hello world")
})

app.listen( port , ()=>{
    console.log(`Server started on http://localhost:${port}`);
    
} )