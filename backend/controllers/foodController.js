import { response } from "express";
import foodModel from "../models/foodModel.js";
import fs from 'fs'



//add food items 

export const addFood = async ( req , res )=>{
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name : req.body.name ,
        description : req.body.description ,
        price : req.body.price ,
        category : req.body.category ,
        image : image_filename
    })

    try {
        await food.save() ;
        res.json({success :true , message : "Food added"})
    } catch (error) {
        console.log(error);
            res.json({ success : false , message : "Error"})
    }


}

export const  listFood = async ( req , res ) => {

    try {
        const foods = await foodModel.find({})
        res.json({ success : true , data : foods})
    } catch (error) {
        console.log(error);
        res.json({ success : false , message : "Error"})
        
    }

}

export const removeFood = async ( req , res ) =>{
    try {
        const food = await foodModel.findById(req.body.id);
        // line below is for deleting the image which was created by us and now we want to delet the image and also the data in DB which comes after
        fs.unlink(`uploads/${food.image}` , ()=>{})
        await foodModel.findByIdAndDelete( req.body.id )
        res.json({ success : true  , message : "Item removed "})

    } catch (error) {
        console.log(error);
        res.json({ success : false , message : "Error" })
    }
}