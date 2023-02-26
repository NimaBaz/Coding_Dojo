import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'



const Details = (props) => {

    const [items, setItems] = useState([]);
    const { id } = useParams();
    const { removeFromDom } = props;
    const navigate = useNavigate()
    
    const deleteItem = (itemID) => {
        axios.delete(`http://localhost:8000/api/items/delete/${itemID}`)
            .then(response => {
                console.log("This item was removed: ", response)
                removeFromDom(itemID)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            navigate("/")
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
            <ul>
                <li>Item: {items.title}</li>
                <li>Price: {items.price}</li>
                <li>Description: {items.description}</li>
                <Link to={`/item/${items._id}/edit`} className="tabs">
                    <button className='btn btn-outline-warning'>Edit</button>
                </Link>
                |
                <button onClick={(e) => {deleteItem(items._id)}} className='btn btn-danger'>Delete</button>
            </ul>
        </div>
    )
}

export default Details;