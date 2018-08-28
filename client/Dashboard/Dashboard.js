/**
 * @file React component for loging users in.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.0.3
 */

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AuthService from '../services/AuthService';

import logo from '../images/barterOutOrangeWhiteLogo.png';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
      redirect: false,
      badCreditials: false,
    };
    this.AUTH = new AuthService();

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this._handleKeyDown.bind(this));
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  _handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }

  login() {
    this.AUTH.login(this.state.emailAddress, this.state.password)
      .then(() => {
        this.setState({ redirect: true });
      });
  }

  render() {
    if (this.state.redirect) {
      console.log('redirect')
      return (<Redirect to="/dashboard/home" />);
    }
    return (
      <div className="login-wrapper">
        <div className="leftLoginContent">
          <h1>Welcome to</h1>
          <img src={logo} alt="logo" />
          <h1>Dashboard</h1>
        </div>
        <div className="rightLoginContent">
          <h2 id="login-header">
          Please enter your email
          and password to log in
          </h2>
          {this.state.badCreditials && <span className="input-error">Incorrect Username or Password</span>}
          <input
            className="formInputLoginSignup"
            onChange={this.onChange}
            placeholder="Email"
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$"
            name="emailAddress"
            required
          />
          <input
            className="formInputLoginSignup"
            onChange={this.onChange}
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <div className="login-prefs">
            <div>Back to <Link href="/" to="/">Home</Link>.</div>
          </div>
          <div>
            <button className="inputButtonFilled" onClick={this.login}>Log In</button>
            <Link href="/signup" to="/signup">
              <button className="inputButton">Sign Up</button>
            </Link>
          </div>
          <div className="legal-links-login">
            <Link className="fine-print-login" href="/termsOfService" to="/termsOfService">Terms of Service</Link>
            |
            <Link className="fine-print-login" href="/privacyPolicy" to="/privacyPolicy"> Privacy Policy</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
