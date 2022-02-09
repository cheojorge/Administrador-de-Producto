import axios from 'axios';
import React, {useEffect,useState} from 'react'
import { useParams,  Link } from 'react-router-dom';

export const Detail = () => {
  const [product, setProduct] = useState([])
  let id = useParams().id;
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="card">
      <h1 className="card-header">PRODUCTO</h1>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-text">PRICE: $ {product.price}</p>
        <p className="card-text">DESCRIPTION: {product.descrip}</p>
        <Link to={"/"}>
          <button className="btn btn-primary">HOME</button>
        </Link>
      </div>
    </div>
  )
}
