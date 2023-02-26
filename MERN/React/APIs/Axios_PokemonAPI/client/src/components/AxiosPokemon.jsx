import React, { useEffect, useState } from 'react';
import axios from 'axios'

const AxiosPokemon = () => {
    const [poke, setPoke] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => {
            console.log("This is our GET request: ", response.data.results)
            setPoke(response.data.results)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }, [buttonClicked])

    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={() => {
                console.log("The button was clicked!")
                setButtonClicked(!buttonClicked)}} className="btn btn-outline-dark mt-5">Hit Me!</button>
            <hr />
            {
                poke.map((pokemon, idx) => {
                    return (
                        <div key={idx}>
                            <ul>
                                <li>{pokemon.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AxiosPokemon;