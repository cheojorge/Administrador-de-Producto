import axios from 'axios';
import React, {useContext, useEffect,useState} from 'react'
import { useParams,  Link } from 'react-router-dom';
import { myContext } from '../Context/myContext';

export const Detail = () => {
  const {removeFromDom} = useContext(myContext)
  const [product, setProduct] = useState([])
  let id = useParams().id;
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [id])
  
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        removeFromDom(id)
        alert(`Delete ${product.title}`)
      })
  }
  return (
    <div className="card">
      <h1 className="card-header">PRODUCTO</h1>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-text">PRICE: $ {product.price}</p>
        <p className="card-text">DESCRIPTION: {product.descrip}</p>
        <Link to={"/"}>
          <button type='button' className="btn btn-light">
            <i className="fa-solid fa-house-chimney"></i>
          </button>
          <button onClick={() => deleteProduct(id)} type='button' className="btn btn-light">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </Link>
        <Link to={`/${id}/edit`}>
          <button type='button' className="btn btn-light">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </Link>
      </div>
    </div>
  )
}
