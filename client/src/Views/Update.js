import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
export default function Update() {
    let id = useParams().id;

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [descrip, setDescrip] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescrip(res.data.descrip)
            })

            .catch(err => console.log(err))


    }, [id])

    const handleOnSumbmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            descrip
        })
            .then(res => alert("Producto modificado con exito"))
    }

    return (
        <>
            <div className="alert alert-primary text-center" role="alert">
                Modificador de Productos
            </div>
            <form onSubmit={handleOnSumbmit}>
                <div className="mb-3 row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">TITLE</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control-plaintext border border-3"
                            id="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">PRICE</label>
                    <div className="col-sm-10">
                        <input
                            type="number" step="0.01"
                            className="form-control-plaintext border border-3"
                            id="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="descrip" className="col-sm-2 col-form-label">DESCRIPTION</label>
                    <div className="col-sm-10">
                        <textarea
                            type="text"
                            className="form-control-plaintext border border-3"
                            id="descrip"
                            value={descrip}
                            onChange={e => setDescrip(e.target.value)}
                        />
                    </div>
                </div>
                <Link to={"/"}>
                    <button type='button'  className='btn btn-outline-success'>
                        <i className="fa-solid fa-house-chimney"></i>
                    </button>
                </Link>
                <button className='btn btn-outline-success' type='submit'>
                    <i className="fa-solid fa-file-import"></i>
                </button>


            </form>
        </>
    )
}
