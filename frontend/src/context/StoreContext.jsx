// instead of prop drilling we wrap the whole code around the contextprovider and therefore we can access the data which are stored in the the js files r any other files
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext( null )

const StoreContextProvider = (props) =>{

    const [ cartItems , setCartItems ] = useState({})
    const url = "http://localhost:4000"
    const [ token , setToken ] = useState("")

    const addToCart = ( itemId ) =>{
        if ( !cartItems[itemId]){
            setCartItems( prev => ({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({ ...prev , [itemId]:prev[itemId] + 1 }))
        }
    }

    const removeFromCart = ( itemId ) =>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if( cartItems[item] > 0 ){
                let itemInfo = food_list.find((product)=> product._id === item);
                // totalAmount += itemInfo.price * cartItems[item];
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

    // this useEffect prevents logging out when we refresh the webpage
    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart , 
        getTotalCartAmount,
        url,
        token,
        setToken
    }



    return(
        <StoreContext.Provider value={ contextValue } >
            {props.children}
        </StoreContext.Provider>
    )
}

export  default StoreContextProvider;