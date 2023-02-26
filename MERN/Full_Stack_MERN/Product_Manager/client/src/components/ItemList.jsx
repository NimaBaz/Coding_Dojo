import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";



const ItemList = (props) => {

    const { removeFromDom } = props;
    
    const deleteItem = (itemID) => {
        axios.delete(`http://localhost:8000/api/items/delete/${itemID}`)
            .then(response => {
                console.log("This item was removed: ", response)
                removeFromDom(itemID)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }

    // const [item, setItem] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/items')
    //         .then(response => {
    //             console.log("This is our GET request: ", response)
    //             setItem(response.data.results)
    //             setLoaded(true)
    //         })
    //         .catch((err) => {
    //             console.log("This is our catch error: ", err)
    //         })
    //         console.log("This is called Asynchronous code")
    // }, [])

    return (
        <div>
            {props.item.map((item, idx) => 
                <ul key={idx}>
                    <li>Item: <Link to={`/item/${item._id}`} className="tabs">{item.title}</Link></li>
                    <li>Price: {item.price}</li>
                    <li>Description: {item.description}</li>
                    <Link to={`/item/${item._id}`} className="tabs">
                        <button className='btn btn-outline-warning'>View</button>
                    </Link>
                    |
                    <Link to={`/item/${item._id}/edit`} className="tabs">
                        <button className='btn btn-outline-warning'>Edit</button>
                    </Link>
                    |
                    <button onClick={(e) => {deleteItem(item._id)}} className='btn btn-outline-danger'>Delete</button>
                </ul>
            )}
        </div>
    )
}

export default ItemList;