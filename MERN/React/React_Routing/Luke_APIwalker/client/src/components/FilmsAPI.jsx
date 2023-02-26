import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const FilmsAPI = () => {
    const [films, setFilm] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}/?format=json`)
        .then((response) => {
            console.log("This is our GET request: ", response)
            setFilm(response.data)
        })
        .catch((err) => {
            setFilm({error: "This is not da way"})
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }, [id])

    return (
        <div>
            <ul>
                <li>Title: {films.title}</li>
                <li>Star Wars Episode: {films.episode_id}</li>
                <li>Opening Crawl: <p>{films.opening_crawl}</p></li>
            </ul>
        </div>
    )
}

export default FilmsAPI;