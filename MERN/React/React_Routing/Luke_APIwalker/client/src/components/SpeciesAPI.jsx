import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const SpeciesAPI = () => {
    const [species, setSpecies] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}/?format=json`)
        .then((response) => {
            console.log("This is our GET request: ", response)
            setSpecies(response.data)
        })
        .catch((err) => {
            setSpecies({error: "This is not da way"})
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }, [id])

    return (
        <div>
            <ul>
                <li>Species: {species.name}</li>
                <li>Classification: {species.classification}</li>
                <li>Designation: {species.designation}</li>
                <li>Average Weight: {species.average_height}</li>
                <li>Average Lifespan: {species.average_lifespan}</li>
            </ul>
        </div>
    )
}

export default SpeciesAPI;