import React, { useContext, useState } from 'react'
import axios from 'axios';
import { myContext } from '../Context/myContext';
export default function Forms() {
    const {products, setProducts} = useContext(myContext)
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [descrip, setDescrip] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            descrip
        })
        .then(res => setProducts([...products,res.data]))
        .catch(err => console.log(err))
        
        e.target.reset();
        setTitle('');
        setPrice(0);
        setDescrip('')
    }

    return (
        <form onSubmit = {onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input onChange ={ e => setTitle(e.target.value) } type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input step="0.01" onChange ={ e => setPrice(e.target.value) } type="number" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-floating">
                <textarea onChange ={ e => setDescrip(e.target.value) } className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Description</label>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Crear</button>
        </form>
    )
}
