import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const Update = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/items/${id}`)
            .then(response => {
                console.log("This is our GET request: ", response)
                setTitle(response.data.results.title)
                setPrice(response.data.results.price)
                setDescription(response.data.results.description)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }, [id])

    const updateItem = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/items/update/${id}`, {
            title,
            price,
            description
        })
        .then((response) => {
            console.log("This is our GET request: ", response)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        navigate('/')
        console.log("This is called Asynchronous code")
    }

    return (
        <div>
            <h1>Update an Item</h1>
            <form onSubmit={updateItem} className="form-group">
                <label>Item: </label> <br />
                <input className="form-control" type="text" onChange={e => setTitle(e.target.value)} value={title} />
                
                <label> Price: </label> <br />
                <input className="form-control" type="number" onChange={e => setPrice(e.target.value)} value={price} />

                <label> Description: </label> <br />
                <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} value={description} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Update;