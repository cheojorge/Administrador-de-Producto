import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context/myContext'

export const ProductList = () => {
    const {products,removeFromDom} = useContext(myContext)
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => removeFromDom(id))
    }
    return (
        <>
            {products.length === 0
                ? <h2 className='text-center'>No existen productos</h2>
                : <h2 className='text-center'>All Products:</h2>
            }
            <ul className="list-group list-group-numbered text-center">
                {
                    products.map((item, index) =>
                        
                            <li key={index} className="list-group-item">
                                <Link to={"/" + item._id}>{item.title}</Link>
                                <button onClick={e => {deleteProduct(item._id)}} type='button' className="btn btn-light">
                                    <i  className="fa-solid fa-trash-can"></i>
                                </button>
                            </li>
                        
                    )
                }
            </ul>
        </>
    )
}
