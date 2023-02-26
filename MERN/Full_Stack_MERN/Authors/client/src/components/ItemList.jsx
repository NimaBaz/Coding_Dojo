import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";



const ItemList = (props) => {

    const { removeFromDom } = props;
    
    const deleteItem = (authorID) => {
        axios.delete(`http://localhost:8000/api/items/delete/${authorID}`)
            .then(response => {
                console.log("This item was removed: ", response)
                removeFromDom(authorID)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }

    return (
        <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className='tabs'>Author</th>
                            <th scope="col" className='tabs'>Description</th>
                            <th scope="col" className='tabs'>Price</th>
                            <th scope="col" className='tabs'>Top50</th>

                            <th scope="col" className='tabs'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.item.map((item, idx) => 
                            <tr key={idx}>
                                <td className='tabs'><Link to={`/item/${item._id}`} className="tabs">{item.author}</Link></td>
                                <td className='tabs'>{item.description}</td>
                                <td className='tabs'>${item.price.toFixed(2)}</td>
                                <td className='tabs'>{item.top50 ? "Yes" : "No"}</td>
                                <td>
                                    <Link to={`/item/${item._id}`} className="tabs">
                                        <button className='btn btn-outline-warning'>View</button>
                                    </Link>
                                    |
                                    <Link to={`/item/${item._id}/edit`} className="tabs">
                                        <button className='btn btn-outline-light'>Edit</button>
                                    </Link>
                                    |
                                    <button onClick={() => {deleteItem(item._id)}} className='btn btn-outline-danger'>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
        </div>
    )
}

export default ItemList;

