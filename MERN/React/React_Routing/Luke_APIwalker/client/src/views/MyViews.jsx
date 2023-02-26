import React from "react";
import LukeAPI from "../components/LukeAPI";
import FilmsAPI from "../components/FilmsAPI";
import PlanetsAPI from "../components/PlanetsAPI";
import SpeciesAPI from "../components/SpeciesAPI";
import StarshipsAPI from "../components/StarshipsAPI";
import Form from "../components/Form";
import { Routes, Route, Link} from "react-router-dom";


const MyViews = () => {
    return (
        <div className="main">
            <h1>Star Wars</h1>
            <h2>May the force be with you!</h2>
            <ul className='nav-bar'>
                <li><Link to={"/people/:id"} className="tabs">Home</Link></li>
                <li><Link to={"/planets/:id"} className="tabs">Planets</Link></li>
                <li><Link to={"/starships/:id"} className="tabs">Starships</Link></li>
                <li><Link to={"/species/:id"} className="tabs">Starships</Link></li>
                <li><Link to={"/films/:id"} className="tabs">Starships</Link></li>
            </ul>
            <Form />
            <Routes>
                <Route path="/people/:id" element={<LukeAPI />}></Route>
                <Route path="/planets/:id" element={<PlanetsAPI />}></Route>
                <Route path="/starships/:id" element={<StarshipsAPI />}></Route>
                <Route path="/species/:id" element={<SpeciesAPI />}></Route>
                <Route path="/films/:id" element={<FilmsAPI />}></Route>
            </Routes>
        </div>
    );
};

export default MyViews;