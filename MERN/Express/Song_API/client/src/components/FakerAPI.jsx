import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";



const FakerAPI = () => {
    const [character, setCharacter] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((response) => {
            console.log("This is our GET request: ", response)
            setCharacter(response.data)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }, [id])
        

    return (
        <div>
            <ul>
                <li>Name: {character.name}</li>
                <li>Mass: {character.mass}</li>
                <li>Skin color: {character.skin_color}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Height: {character.height}</li>
            </ul>
        </div>
    )
}

export default FakerAPI;