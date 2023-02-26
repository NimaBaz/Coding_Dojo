import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';


const Form = (props) => {

    const [type, setType] = useState("people");
    const [id, setId] = useState(1);

    const navigate = useNavigate();

    const Search = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`)
    }



    return (
    <form onSubmit={Search} className="form-group">
        <label>Search for: </label>
        <select onChange={e => setType(e.target.value)} value={type}>
            <option>People</option>
            <option>Planets</option>
            <option>Starships</option>
        </select>
        <label> ID: </label>
        <input className="form-control" type="number" min={1} onChange={e => setId(e.target.value)} value={id} />
        <input type="submit" value="Search" />
    </form>
    );
}

export default Form;