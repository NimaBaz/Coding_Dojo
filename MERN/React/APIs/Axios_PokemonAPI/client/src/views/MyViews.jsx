import React from "react";
import AxiosPokemon from '../components/AxiosPokemon';
import PokemonAPI from "../components/PokemonAPI";

const MyViews = () => {
    return (
        <div>
        {/* AxiosPokemon uses axios and useEffect and PokemonAPI uses fetch to get the data */}
        
        <AxiosPokemon></AxiosPokemon>
        {/* <PokemonAPI></PokemonAPI> */}
        </div>
    );
};

export default MyViews;