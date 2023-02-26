import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";



const Details = (props) => {

    const [items, setItems] = useState();
    const { id } = useParams();
    const { removeFromDom } = props;
    const navigate = useNavigate()
    
    const deleteItem = (authorID) => {
        axios.delete(`http://localhost:8000/api/items/delete/${authorID}`)
            .then(response => {
                console.log("This item was removed: ", response)
                removeFromDom(authorID)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            navigate('/')
            console.log("This is called Asynchronous code")
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/items/${id}`)
            .then(response => {
                console.log("This is our GET request: ", response)
                setItems(response.data.results)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }, [id])

    return (
        <div>
            {
                items?
                <ul>
                    <li>Author: {items.author}</li>
                    <li>Price: ${items.price.toFixed(2)}</li>
                    <li>Description: {items.description}</li>
                    <Link to={"/"} className="tabs">
                        <button  className='btn btn-outline-light'>Back</button>
                    </Link>
                    |
                    <Link to={`/item/${items._id}/edit`} className="tabs">
                        <button className='btn btn-outline-warning'>Edit</button>
                    </Link>
                    |
                    <button onClick={() => {deleteItem(items._id)}} className='btn btn-outline-danger'>Delete</button>
                </ul>:
                <h1>Something went wrong.</h1>
            }
        </div>
    )
}

export default Details;