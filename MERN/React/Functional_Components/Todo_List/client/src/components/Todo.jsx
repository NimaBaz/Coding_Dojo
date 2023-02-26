import React, { useEffect, useState, useRef } from  'react';

const Todo = (props) => {
    // State variables
    // Getters & Setters
    const [data, setData] = useState("");
    const [listOfData, setListOfData] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);

    const addData = (e) => {
        e.preventDefault();

        if (data.length === 0) {
            return;
        }
        
        const dataItem = {
            text: data,
            complete: false
        }

        console.log("Add data ", data);
        setListOfData([...listOfData, dataItem])
        setData("")
    };

    const deleteData = (e, idx) => {
        console.log("Deleting data: ", idx);

        let copy = listOfData.filter((data, i) => {
            console.log(`${data} ${idx} will be removed from our list of data`);
            return i !== idx
        })
        setListOfData(copy)
    }

    const handleToggleComplete = (idx) => {
        const updatedData = listOfData.map((data, i) => {
            if (idx === i) {
                // data.complete = !data.complete;

                // To avoid mutating the data directly, do this:
                const updatedData = {...data, complete: !data.complete}
                return updatedData
            }
            return data
        })
        setListOfData(updatedData)
    }

    const didMount = useRef(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        if (data) {
            setData(data)
        }
    }, [buttonClicked]);
    
    useEffect(() => {
        if (didMount.current) {
            localStorage.setItem('data', JSON.stringify(data))
        }
        else {
            didMount.current = true
        }
    }, [data]);



    return (
        <>

        <h1>TODO List</h1>
        <form onSubmit={ addData } className="form-container">
            <div>
                <label>Data: </label>
                <input type="text" onChange={(e) => {setData(e.target.value)}} className="form-control" />
            </div>
            
            <button onClick={() => {setButtonClicked(!buttonClicked)}} className="btn btn-outline-dark">Add</button>
        </form>
        <hr />

        <div className="user-list" >
            {
                listOfData.map((data, idx) => {
                    const todoClasses = ["bold", "italic"];
                    if (data.complete) {
                        todoClasses.push("line-through");
                    }

                    return (
                        <div key={idx} className="list">
                            <span className={todoClasses.join(" ")}>
                                {data.text} <input onChange={(e) => {handleToggleComplete(idx)}} checked={data.complete} type="checkbox" name="myCheckbox" />
                            </span>
                            <button onClick={(e) => deleteData(e, idx)} className="btn-outline-danger">Delete</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
}

export default Todo;