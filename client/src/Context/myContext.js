import React, { createContext, useState } from "react";

export const myContext = createContext();

export const MyProvide = ({children}) => {
    const [products, setProducts] = useState([])
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id))
      }
    return (
        <myContext.Provider value={{products, setProducts, removeFromDom}}>
            {children}
        </myContext.Provider>
    )
}