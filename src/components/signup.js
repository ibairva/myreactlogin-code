import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  confirmpw: "",
  nameError: "",
  emailError: "",
  usernameError: "",
  passwordError: "",
  confirmpwError: "",
};

let list = [];

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let usernameError = "";
    let passwordError = "";
    let confirmpwError = "";

    let list2 = localStorage.getItem("userData");
    list2 = JSON.parse(list2);

    const filtered = (list2 || []).filter(
      (n) => n.username === this.state.username
    );
    console.log(filtered);

    if (filtered.length === 1) {
      alert("This username is already registered");
    } else {
      if (!this.state.name) {
        nameError = "Name cannot be blank";
      }

      if (!this.state.email) {
        emailError = "Email cannot be blank";
      }

      if (!this.state.email.includes("@")) {
        emailError = "Invalid email";
      }

      if (!this.state.username) {
        usernameError = "Username cannot be blank";
      }

      if (!this.state.password) {
        passwordError = "Password cannot be blank";
      }

      if (this.state.password.length < 6) {
        passwordError = "Password should be of minimum 6 characters";
      }

      if (this.state.confirmpw !== this.state.password) {
        confirmpwError = "Password doesn't match";
      }

      if (
        emailError ||
        nameError ||
        usernameError ||
        passwordError ||
        confirmpwError
      ) {
        this.setState({
          emailError,
          nameError,
          usernameError,
          passwordError,
          confirmpwError,
        });
        return false;
      }

      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
    if (isValid) {
      alert("SignUp Successful. You can now Sign In ");
      // clear form
      this.setState(initialState);
      list.push(this.state);
      localStorage.setItem("userData", JSON.stringify(list));
      console.log(localStorage);
    }
  };

  render() {
    return (
      <div className="signup-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-header">Create Account</div>
          <div className="content">
            <div className="form">
              <div className="form-item">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 11, color: "#ea0101" }}>
                  {this.state.nameError}
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email id"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 11, color: "#ea0101" }}>
                  {this.state.emailError}
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="company">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Choose a username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 11, color: "#ea0101" }}>
                  {this.state.usernameError}
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 11, color: "#ea0101" }}>
                  {this.state.passwordError}
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="confirmpw">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpw"
                  placeholder="Confirm your password"
                  value={this.state.confirmpw}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 11, color: "#ea0101" }}>
                  {this.state.confirmpwError}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="signup-btn">
              Create Account
            </button>
            <div className="account-query">
              <p>Already have an account?</p>
              <Link to="/signin">
                <button className="signinDirect">Sign In here</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
