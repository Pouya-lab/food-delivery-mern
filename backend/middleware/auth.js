import jwt from "jsonwebtoken"

const authMiddleware = async( req , res , next )=>{
    const { token } = req.headers;

    if(!token){
        return res.json({ success : false , message : " Not Authorised, Login again"})
    }

    try {
        const token_decode = jwt.verify( token , process.env.JWT_SECRET );
        // by changing req.body.userId the error for Cannot set properties of undefined (setting 'userId') is gone
        req.userId = token_decode.id;
        next()
    } catch (error) {
        console.log(error);
        req.json({ success : false , message : "Error"})
        
    }

}

export default authMiddleware;