import React, { useState } from  'react';

const darkMode = {
    backgroundColor: "black",
    color: "white"
}

const lightMode = {
    backgroundColor: "white",
    color: "black"
}

const UserForm = (props) => {
    // State variables
    // Getters & Setters
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [img, setImg] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [listOfUsers, setListOfUsers] = useState([]);
    const [light, setLight] = useState(true);
    const switchLight = () => setLight(!light);


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, img, password, confirmPassword };
        console.log("Welcome", newUser);
        setListOfUsers([...listOfUsers, newUser])

        setHasBeenSubmitted(true);
    };

    const deleteUser = (e, idx) => {
        console.log("Deleting pet: ", idx);

        let copy = listOfUsers.filter((user, i) => {
            console.log(`${user} ${idx} will be removed from our list of users`);
            return i !== idx
        })
        setListOfUsers(copy)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);

        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } 
        else if(e.target.value.length < 2) {
            setFirstNameError("Field must be at least 2 characters!");
        } 
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setlastName(e.target.value);

        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } 
        else if(e.target.value.length < 2) {
            setLastNameError("Field must be at least 2 characters!");
        } 
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } 
        else if(e.target.value.length < 5) {
            setEmailError("Field must be at least 5 characters!");
        } 
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } 
        else if(e.target.value.length < 8) {
            setPasswordError("The passwords must be at least 8 characters!");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if(e.target.value !== password) {
            setConfirmPasswordError("Password must match!");
        } 
        else {
            setConfirmPasswordError("");
        }
    }

    return(
        <>
        <div className="btn1" style={light ? lightMode : darkMode}>
            <button onClick={switchLight} className="btn btn-warning">{light ? "Dark Mode" : "Light Mode"}</button>
        </div>
        <h1>User Form</h1>
        <form onSubmit={ createUser } className="form-container">
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>

            }
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } className="form-control" />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    <></>
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } className="form-control"/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    <></>
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } className="form-control"/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    <></>
                }
            </div>
            <div>
                <label>User Image: </label> 
                <input type="text" onChange={ (e) => {setImg(e.target.value)} } className="form-control"/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword} className="form-control"/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    <></>
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } className="form-control"/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    <></>
                }
            </div>
            <button onClick={createUser} className="btn btn-outline-dark">Create User</button>
        </form>
        
        <div className="user-list" style={light ? lightMode : darkMode}>
            <button onClick={switchLight} className="btn btn-warning">{light ? "Dark Mode" : "Light Mode"}</button>
            {
                listOfUsers.map((user, idx) => {
                    return (
                        <div key={idx}>
                            <h2>This is my unique key: {idx}</h2>
                            <img src={user.img} alt="User Pic" height="200px"/>
                            <h1>{user.firstName} {user.lastName}</h1>
                            <h3>{user.email}</h3>
                            <h4>{user.password}</h4>
                            <button onClick={(e) => deleteUser(e, idx)} className="btn-outline-danger">Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
        </>
    );
};

export default UserForm;