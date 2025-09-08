// instead of prop drilling we wrap the whole code around the contextprovider and therefore we can access the data which are stored in the the js files r any other files
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext( null )

const StoreContextProvider = (props) =>{

    const contextValue = {
        food_list
    }



    return(
        <StoreContext.Provider value={ contextValue } >
            {props.children}
        </StoreContext.Provider>
    )
}

export  default StoreContextProvider;