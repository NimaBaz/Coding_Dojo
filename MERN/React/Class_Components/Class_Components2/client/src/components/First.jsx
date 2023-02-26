import React, { Component } from 'react';

const darkMode = {
    backgroundColor: "black",
    color: "white",
    padding: "10px"
}

const lightMode = {
    backgroundColor: "white",
    color: "black",
    padding: "10px"
}

const buttonStyle = {
    width: "100px",
    height: "50px",
    backgroundColor: "orange",
    borderRadius: "50px",
    fontSize: "large"
}

class First extends Component {
    constructor(props) {
        super(props)

        this.state = {
            light: true
        }
    }

    render() {
        const {firstName, lastName, favNum, favColor, favGame, children} = this.props
        return (
            <>
            <div style={this.state.light ? lightMode : darkMode}>
                {children}
                <h2>Full Name: {firstName} {lastName}</h2>
                <h3>Favorite Number: {favNum}</h3>
                <h4>Favorite Color: {favColor}</h4>
                {/* <h5>Favorite Game: {favGame}</h5> */}

                <ul>
                    {
                        favGame.map((tag, i) => {
                            return (
                                <li key={i}>{tag}</li>
                            )
                        })
                    }
                </ul>

                <button style={buttonStyle} onClick={() => this.setState({light: !this.state.light})}>{this.state.light ? "Dark" : "Light"}</button>
            </div>
            </>
        );
    }
}

export default First;
