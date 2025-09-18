import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : {
        type: String , 
        required: true
    },
    decription : {
        type : String,
        required: true
    },
    image :{
        type : String , 
        required : true
    },
    category :{
        type: String,
        required : true
    }
})

//if there is no existing model then it will create it 
const foodModel = mongoose.model.food || mongoose.model( "food" , foodSchema )

export default foodModel;