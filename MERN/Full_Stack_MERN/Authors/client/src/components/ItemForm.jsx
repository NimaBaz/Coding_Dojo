import axios from 'axios';
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const Form = () => {

    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [top50, setTop50] = useState(false);
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    const Create = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/items/new', {
            author,
            price,
            description,
            top50
        })
        .then((response) => {
            console.log("This is our GET request: ", response)
            navigate('/')
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key in errorResponse) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
        console.log("This is called Asynchronous code")
    }

    return (
        <>
        <h2>Lets add in our authors!</h2>
        {errors.map((err, index) => <p key={index} className="tabs">{err}</p>)}
        <form onSubmit={Create} className="form-group">
            
            <label>Author: </label> <br />
            <input className="form-control" type="text" onChange={e => setAuthor(e.target.value)} value={author} />
            
            <label> Price: </label> <br />
            <input className="form-control" type="number" onChange={e => setPrice(e.target.value)} value={price} />

            <label> Description: </label> <br />
            <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} value={description} />

            <div>
                <label>Top50</label>
                <input type='checkbox' checked={top50} onChange={(e) => setTop50(e.target.checked)}/>   
            </div>

            <button onClick={Create} className='btn btn-warning'>Create</button>
            |
            <Link to={"/"} className="tabs">
                <button  className='btn btn-warning'>Cancel</button>
            </Link>
        </form>
        </>
    );
}

export default Form;