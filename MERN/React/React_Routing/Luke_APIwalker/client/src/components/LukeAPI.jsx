import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";



const LukeAPI = () => {
    const [character, setCharacter] = useState([]);
    const [planets, setPlanet] = useState([]);
    const [planetID, setPlanetID] = useState([]);
    const [home, setHome] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((response) => {
            console.log("This is our GET request: ", response)
            setCharacter(response.data)

            console.log("This is our GET request: ", response.data.homeworld)
            setPlanet(response.data.homeworld)

            setPlanetID(response.data.homeworld.split('/').slice(-2)[0])

            axios.get(`${planets}`)
            .then((response) => { 
            console.log("This is our Homeworld: ", response.data) 
            setHome(response.data)
            })

            .catch((err) => {
                setCharacter({error: "This is not da way"})
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
        })
    }, [id, planets])


    return (
        <div>
            <ul>
                <li>Name: {character.name}</li>
                <li>Mass: {character.mass}</li>
                <li>Skin color: {character.skin_color}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Height: {character.height}</li>
                <a href={`/planets/${planetID}`} className="tabs">Homeworld: {home.name}</a>
            </ul>
        </div>
    )
}

export default LukeAPI;