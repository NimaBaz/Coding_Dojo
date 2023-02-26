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

const buttonDiv = {
    display: "inline-block",
    alignItems: "center"
}

const buttonStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "orange",
    borderRadius: "50px",
    fontSize: "large"
}

class First extends Component {
    constructor(props) {
        super(props)

        this.state = {
            light: true,
            age: this.props.Age
        }
    }

    age = () => {
        this.setState({age: this.state.age + 1})
        console.log(this)
    }

    render() {
        const {firstName, lastName, favNum, favColor, favGame, children} = this.props
        return (
            <>
            <div style={this.state.light ? lightMode : darkMode}>
                {children}
                <h1>Full Name: {firstName} {lastName}</h1>
                <h2>Age: {this.state.age}</h2>
                <h3>Favorite Number: {favNum}</h3>
                <h4>Favorite Color: {favColor}</h4>
                <h5>Favorite Game: {favGame}</h5>
                <div style={buttonDiv}>
                    <button style={buttonStyle} onClick={() => this.setState({light: !this.state.light})}>{this.state.light ? "Dark" : "Light"}</button>
                    <button style={buttonStyle} onClick={this.age}>Click Me {this.props.firstName}</button>
                </div>
            </div>
            </>
        );
    }
}

export default First;
