import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


const createToken = ( id )=>{
  return jwt.sign( { id } , process.env.JWT_SECRET , {
    expiresIn : "2h"
  } )
}


// register user
export const registerUser = async(req, res) => {
  const { name, password, email } = req.body;

  try {

    const exists = await userModel.findOne({email})

    if(exists){
        return res.json({ success : false , message : "User Already exist" })
    }

    // validating email format and passwords strenght
    if(!validator.isEmail(email)){
        return res.json( {success : false , message : "Enter a valid Email"} )
    }

    if (!validator.isStrongPassword(password)) {
      return res.json({ success: false, message: "Password must contain uppercase, number, and symbol and more than 8 charachters" });
    }


  // hashing user password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash( password , salt )

  const newUser = new userModel({
    name : name ,
    email : email ,
    password : hashedPassword,
  })

  const user = await newUser.save()

  const token = createToken( user._id )

  res.json({ success : true , token})


  } catch (error) {
    console.log(error);
    res.json({ success : false , message : "Error" })
  }
};

// login user
export const loginUser = async (req, res) => {};
