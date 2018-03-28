import React, { Component } from 'react';
import Particles from 'react-particles-js';

// import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Wrapper from './components/Wrapper';

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
      <Particles
      params={{
        "particles": {
          "number": {
            "value": 218,
            "density": {
              "enable": true,
              "value_area": 394.57382081613633
            }
          },
          "color": {
            "value": "#ff00e0"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 38.36163836163836,
              "size_min": 1.5984015984015985,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "bubble"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 383.61638361638364,
              "size": 10,
              "duration": 2,
              "opacity": 0.17582417582417584,
              "speed": 3
            },
            "repulse": {
              "distance": 71.92807192807193,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      
      }}>
      <Wrapper>
       <Login />
       </Wrapper>
       </Particles>
      
    )
}
}

export default App;
