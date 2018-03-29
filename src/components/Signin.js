import React from "react"
import App from "../App.js"

class Farley extends React.Component {

state = {
  email:"",
  password:""

};

handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


render () {
  return (
<div>
  <h1>Queue</h1>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">

             <form>
              <div className="radio">
                <h2>Sign in as:</h2>
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
           <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
          </label>
         </div>

         <div className="password">
          <label>
           Password:
           <input name="password" placeholder="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
         </div>
    
         <div className="submit">
           <button className="btn btn-danger" className="enter" type="submit" value="Submit">
            Login
           </button>
         </div>
       </form>
       </div>
    )

}
}


       export default Farley;