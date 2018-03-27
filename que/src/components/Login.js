import React from "react";
// import React, { Component } from "react";
// import './Login.css'

// class Login extends Component {
//       // Setting the initial values of this.state.username and this.state.password
//   state = {
//     firstname: "",
//     lastname: "",
//     username: "",
//     password: "",
//     email: "",

//   };

//   // handle any changes to the input fields
//   handleInputChange = event => {
//     // Pull the name and value properties off of the event.target (the element which triggered the event)
//     const { name, value } = event.target;

//     // Set the state for the appropriate input field
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, prevent the default event and alert the username and password
//   handleFormSubmit = event => {
//     event.preventDefault();
//     alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
//     this.setState({ username: "", password: "" });
//   };

//   render() {
//     return (
    const Login = props => (
        <div class="container">
        <div class="signup">
            <div class="row vertical-center">
                <div class="signup-form col-md-12">
                    <form class="form-signin" id="sign-up">
                        {/* <a href="index.html">
                            <i class="fas fa-arrow-left" style="margin: 20px 0 0 10px;"></i>
                        </a> */}
                        <img src="assets/images/logo.svg" alt="Logo"/>
                        <p>Welcome! Please create a new account.</p>
                        <input type="text" class="form-control signup-username" name="username" placeholder="Username" required="" value={props.username} />
                        <input type="text" class="form-control signup-email" name="email" placeholder="Email Address" required="" value={props.email} />
                        <input type="text" class="form-control signup-first" name="first" placeholder="First name" required="" value={props.firstname} />
                        <input type="text" class="form-control signup-last" name="last" placeholder="Last name" required="" value={props.lastname} />
                        {/* <input type="" className="" */}
                        <input type="password" class="form-control signup-password" name="password" placeholder="Password (Minimum 6 characters)"
                            required="" value={props.password} />
                        <button class="btn btn-lg btn-primary btn-block create-btn" type="submit" onClick={this.handleFormSubmit}>Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
    

//     );
// }
// }


export default Login;