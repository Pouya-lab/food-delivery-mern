import express from "express";
import { placeOrder, userOrders, verifyOrder } from "../controllers/orderControler.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post( "/place" , authMiddleware , placeOrder )

orderRouter.post("/verify" , verifyOrder )

orderRouter.post("/userorders" , authMiddleware , userOrders );


export default orderRouter;