import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"

// we have to import stripe in server to prevent error for (Neither apiKey nor config.authenticator provided)

 export const placeOrder = async( req , res ) => {

    const frontend_url = "http://localhost:5173"

    try {
        
        const newOrder = new orderModel( { 
            userId : req.body.userId,
            items : req.body.items,
            amount : req.body.amount,
            address : req.body.address,
         } )
         await newOrder.save();
        //  after placing the order we need to set the cart to an empty object to clear the cart data
         await userModel.findByIdAndUpdate( req.body.userId , { cartData : {} })

         const line_items = req.body.items.map(( item )=>{
                price_data : {

                    currency : "eur";
                    product_data : {
                        name:item.name
                    };
                    unit_amount: item.price*100;

                }
                quantity : item.quantity
         })

         line_items.push({

            price_data : {

                currency : "eur",
                product_data : {
                    name : "Delivery Charges"
                },
                unit_amount : 2*100
            },
            quantity : 1,

         })

         const session = await Stripe.checkout.session.create({
            line_items :line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
         })

         res.json({ success : true , session_url : session.url})

    } catch (error) {
        console.log(error);
        res.json({ success : false , message : "Error"})
        
    }

 }