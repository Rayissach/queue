import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import "./App.css";
import Signin from './components/Signin.js';



class App extends Component {
 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="image">
      <Wrapper>
      <Signin />
      </Wrapper>
      </div>

    );
  }

}

export default App;
