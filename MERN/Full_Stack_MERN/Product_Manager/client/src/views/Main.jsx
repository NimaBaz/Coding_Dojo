import axios from 'axios';
import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import React, { useEffect, useState } from "react";



const Main = () => {

    const [item, setItem] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(response => {
                console.log("This is our GET request: ", response)
                setItem(response.data.results)
                setLoaded(true)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }, [])

    const removeFromDom = itemID => {
        setItem(item.filter(items => items._id !== itemID));
    }

    return (
        <div className="main">
            
            {loaded && <ItemList item={item} removeFromDom={removeFromDom} />}
            <Link to={`/item`} className="tabs">
                <button className='btn btn-primary'>Create</button>
            </Link>

        </div>
    );
};

export default Main;