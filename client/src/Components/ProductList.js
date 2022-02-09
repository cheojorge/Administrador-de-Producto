import React from 'react'
import { Link } from 'react-router-dom'

export const ProductList = ({products}) => {
    
    return (
        <>
            <h2 className='text-center'>All Products:</h2>
            <ol className="list-group list-group-numbered text-center">
                {
                    products.map((item, index) => 
                    <Link key={index} to={"/"+item._id}>
                        <li key={index} className="list-group-item">{item.title}</li>
                    </Link>
                        
                    )
                }   
            </ol>
        </>
    )
}
