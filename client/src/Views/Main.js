import axios from 'axios'
import React, { useEffect, useContext }  from 'react'
import Forms from '../Components/Forms'
import { ProductList } from '../Components/ProductList'
import { myContext } from '../Context/myContext'

export const Main = () => {
    const {setProducts} = useContext(myContext)
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [setProducts])
    // const removeFromDom = id => {
    //   setProducts(products.filter(product => product._id !== id))
    // }
  return (
      <>
        <Forms/>
        <hr/>
        {/* <ProductList removeFromDom={removeFromDom}/> */}
        <ProductList />
      </>
  )
}
