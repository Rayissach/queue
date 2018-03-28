import React, { Component } from 'react';
// import Particles from 'react-particles-js';

// import logo from './logo.svg';
// import './App.css';
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
    alert(`First Name: ${this.state.firstname}\nLast Name: ${this.state.lastname}\nEmail: ${this.state.email}\nUsername: ${this.state.username}\nPassword: ${this.state.password}\n`);
    this.setState({ firstname: "", lastname: "", email: "", username: "", password: ""});
  };

  render() {
    return (
      <Login />
    )
}
}

export default App;
