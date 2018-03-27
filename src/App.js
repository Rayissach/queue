import React, { Component } from "react";
import Wrapper from "./components/Wrapper";




class App extends Component {
 
state = {
  email:"",
  password:""

};

change = e =>{
  this.setState({
    [e.target.name]: e.target.value
  });
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <h1>JukeBox</h1>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">

             <form>
              <div className="radio">
                <h3>Sign in as:</h3>
                <label>
                  <input type="radio" 
                  name="type" value="dj" />
                   DJ
                </label>
              </div>
        
              <div className="radio">
                <label>
                  <input type="radio" value="client" />
                  Client
                </label>
              </div>
        
             </form>

        </div>
      </div>
    </div>
       <form>
     	   <div className="username">
     	    <label>
     	     Email:
     	     <input name="email" placeholder="Email" value={this.state.email} onChange={e=> this.change(e)} />
     	    </label>
		     </div>

		     <div className="password">
     	    <label>
     	     Password:
     	     <input name="password" placeholder="password" type="password" value={this.state.password} onChange={e=> this.change(e)} />
     	    </label>
		     </div>
		
		     <div className="submit">
     	     <button className="btn btn-danger" className="enter" type="submit" value="Submit">
     		    Login
     	     </button>
     	   </div>
       </form>
      </Wrapper>
    );
  }

}

export default App;
