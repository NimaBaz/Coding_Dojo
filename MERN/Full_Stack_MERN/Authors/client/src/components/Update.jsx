import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const Update = () => {

    const { id } = useParams();
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [top50, setTop50] = useState(false);
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/items/${id}`)
            .then(response => {
                console.log("This is our GET request: ", response)
                setAuthor(response.data.results.author)
                setPrice(response.data.results.price)
                setDescription(response.data.results.description)
                setTop50(response.data.results.top50)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }, [id])

    const updateItem = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/items/update/${id}`, {
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
        <div>
            <h1>Update an Author</h1>
            {errors.map((err, index) => <p key={index} className="tabs">{err}</p>)}
            <form onSubmit={updateItem} className="form-group">

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

                <button onClick={updateItem} className='btn btn-warning'>Submit</button>
                <Link to={"/"} className="tabs">
                    <button  className='btn btn-warning'>Cancel</button>
                </Link>
            </form>
        </div>
    );
}

export default Update;