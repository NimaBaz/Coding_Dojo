import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const StarshipsAPI = () => {
    const [starships, setStarships] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/?format=json`)
        .then((response) => {
            console.log("This is our GET request: ", response)
            setStarships(response.data)
        })
        .catch((err) => {
            setStarships({error: "This is not da way"})
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }, [id])

    return (
        <div>
            <ul>
                <li>Starship: {starships.name}</li>
                <li>Model: {starships.model}</li>
                <li>Manufacturer: {starships.manufacturer}</li>
                <li>Class: {starships.starship_class}</li>
                <li>Cost: {starships.cost_in_credits}</li>
            </ul>
        </div>
    )
}

export default StarshipsAPI;