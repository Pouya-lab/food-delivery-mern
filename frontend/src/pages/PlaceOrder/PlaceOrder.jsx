import { useContext, useEffect } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function PlaceOrder() {

  const { getTotalCartAmount , token , food_list , cartItems , url } = useContext(StoreContext);
  const navigate = useNavigate()

  const [ data , setData ] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    phone : ""
    })

    const onChangeHandler = ( event )=>{
      const name = event.target.name;
      const value = event.target.value;
      setData( data =>({ ...data , [name]:value }))
    }

    const placeOrder = async( event )=>{
      event.preventDefault();
      let orderItems = [];
      food_list.map((item)=>{
        if( cartItems[item._id] > 0 ){
            let itemInfo = item;
            itemInfo["quantity"]= cartItems[ item._id ];
            orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address : data,
        items: orderItems , 
        amount : getTotalCartAmount() + 2,
      }
      let response = await axios.post( url + "/api/order/place" , orderData , { headers : { token }})
      if( response.data.success ){
        const { session_url } = response.data;
        window.location.replace( session_url )
      }
      else{
        alert("Error")
      }
      
    }
// logic for place order page toward refreshing and redirecting if the cart amount is 0 or not
    useEffect(()=>{
      if(!token){
        navigate("/cart")
      }
      else if( getTotalCartAmount() === 0 ){
        navigate("/cart")
      }

    }, [token])


  return (
    <form onSubmit={ placeOrder } className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fileds">
          <input required onChange={ onChangeHandler } value={data.firstName} name="firstName" type="text" placeholder="First Name" />
          <input required onChange={ onChangeHandler } value={data.lastName} name="lastName" type="text" placeholder="Last Name" />
        </div>
        <input required onChange={ onChangeHandler } name="email" value={data.email} type="text" placeholder="Email Address" />
        <input required onChange={ onChangeHandler } name="street" value={data.street} type="text" placeholder="Street" />
        <div className="multi-fileds">
          <input required onChange={ onChangeHandler } name="city" value={data.city} type="text" placeholder="City" />
          <input required onChange={ onChangeHandler } name="state" value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fileds">
          <input required onChange={ onChangeHandler } name="zipcode" value={data.zipcode} type="text" placeholder="Zipcode" />
          <input required onChange={ onChangeHandler } name="country" value={data.country} type="text" placeholder="Country" />
        </div>
        <input required onChange={ onChangeHandler } name="phone" value={data.phone} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className="">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
