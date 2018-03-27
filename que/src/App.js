import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

class App extends Component {
  
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",

  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };
  render() {
    return (
      <Login />
    )
}
}

export default App;
