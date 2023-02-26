import React, { useState } from 'react';

const PokemonAPI = () => {
    const [poke, setPoke] = useState([])

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log("This is my get request data: ", response.results)
            setPoke(response.results)
        })
        .catch((err) => {
            console.log("This is my catch error: ", err)
        })

        console.log("This is asynchronous code")
    }

    return (
        <div>
        <h1>Pokemon</h1>
        <button onClick={fetchData} className="btn btn-outline-dark mt-5">Hit Me!</button>
        <hr />
        {
            poke.map((pokemon, idx) => {
                return(
                    <div key={idx}>
                        <ul>
                            <li>
                                {pokemon.name}
                            </li>
                        </ul>
                    </div>
                )
            })
        }
        </div>
    )
}

export default PokemonAPI
