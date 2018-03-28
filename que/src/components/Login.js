import React from "react";
// import React, { Component } from "react";
import './Login.css'

    const Login = props => (
        <div className="container">
        <div className="signup">
            <div className="row vertical-center">
                <div className="signup-form col-md-12">
                    <form className="form-signin" id="sign-up">
                        {/* <a href="index.html">
                            <i class="fas fa-arrow-left" style="margin: 20px 0 0 10px;"></i>
                        </a> */}
                        <img src="assets/images/logo.svg" alt="Logo"/>
                        <p>Welcome! Please create a new account.</p>
                        <select className="form-control signup-attendant" name="attendant" required="">
                            <option value="DJ"> DJ
                            </option>
                            <option value="Party Animal"> Party Animal
                            </option>
                        </select>
                        <input type="text" className="form-control signup-username" name="username" placeholder="Username" required="" value={props.username} />
                        <input type="text" className="form-control signup-email" name="email" placeholder="Email Address" required="" value={props.email} />
                        <input type="text" className="form-control signup-first" name="first" placeholder="First name" required="" value={props.firstname} />
                        <input type="text" className="form-control signup-last" name="last" placeholder="Last name" required="" value={props.lastname} />
                        {/* <input type="" className="" */}
                        <input type="password" className="form-control signup-password" name="password" placeholder="Password (Minimum 6 characters)"
                            required="" value={props.password} />

                        <button className="btn btn-lg btn-primary btn-block create-btn" type="submit" onClick={this.handleFormSubmit}>Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )


export default Login;