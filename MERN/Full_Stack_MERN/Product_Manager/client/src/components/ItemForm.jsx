import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Form = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    const Create = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/items/new', {
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
        <>
        <h2>Lets add in our items!</h2>
        <form onSubmit={Create} className="form-group">
            <label>Item: </label> <br />
            <input className="form-control" type="text" onChange={e => setTitle(e.target.value)} value={title} />
            
            <label> Price: </label> <br />
            <input className="form-control" type="number" onChange={e => setPrice(e.target.value)} value={price} />

            <label> Description: </label> <br />
            <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} value={description} />

            <input type="submit" value="Create"  />
        </form>
        </>
    );
}

export default Form;