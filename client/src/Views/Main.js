import axios from 'axios'
import React, { useEffect, useState }  from 'react'
import Forms from '../Components/Forms'
import { ProductList } from '../Components/ProductList'


export const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
  return (
      <>
        <Forms/>
        <hr/>
        <ProductList products={products}/>
      </>
  )
}
