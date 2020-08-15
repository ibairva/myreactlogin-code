import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

let initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
};

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let usernameError = "";
    let passwordError = "";

    let list2 = localStorage.getItem("userData");
    list2 = JSON.parse(list2);

    const filtered = (list2 || []).filter(
      (n) => n.username === this.state.username
    );
    console.log(filtered);

    if (this.state.username && filtered.length === 0) {
      alert("You are not registered. Please Sign Up");
    } else {
      if (!this.state.username) {
        usernameError = "Username cannot be blank";
      }

      if (!this.state.password) {
        passwordError = "Password cannot be blank";
      }

      if (usernameError || passwordError) {
        this.setState({ usernameError, passwordError });
        return false;
      }

      return true;
    }
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      alert("Login Successful");
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="signin-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signin-header">Sign In</div>
          <div className="content">
            <div className="form">
              <div className="form-item">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "#ea0101" }}>
                  {this.state.usernameError}
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "#ea0101" }}>
                  {this.state.passwordError}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="signin-btn">
              Sign In
            </button>
            <div className="reg-query">
              <p>Doesn't have an account?</p>
              <Link to="/signup">
                <button className="signupDirect">Sign Up here</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
