// instead of prop drilling we wrap the whole code around the contextprovider and therefore we can access the data which are stored in the the js files r any other files
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext( null )

const StoreContextProvider = (props) =>{

    const [ cartItems , setCartItems ] = useState({})

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

    useEffect(()=>{
        console.log(cartItems);
        
    }, [cartItems] )

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }



    return(
        <StoreContext.Provider value={ contextValue } >
            {props.children}
        </StoreContext.Provider>
    )
}

export  default StoreContextProvider;