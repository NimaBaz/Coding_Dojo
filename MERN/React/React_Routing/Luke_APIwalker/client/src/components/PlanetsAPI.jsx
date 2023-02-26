import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const PlanetsAPI = () => {
    const [planets, setPlanet] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then((response) => {
            console.log("This is our GET request: ", response)
            setPlanet(response.data)
        })
        .catch((err) => {
            setPlanet({error: "This is not da way"})
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }, [id])

    return (
        <div>
            <ul>
                <li>Planet: {planets.name}</li>
                <li>Population: {planets.population}</li>
                <li>Climate: {planets.climate}</li>
                <li>Terrain: {planets.terrain}</li>
            </ul>
        </div>
    )
}

export default PlanetsAPI;