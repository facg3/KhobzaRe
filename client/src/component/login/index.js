import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: ''
    };
  }
  render() {
    return this.props.success ? (
      <Redirect to="/home" />
    ) : (
      <span>
        <span>c</span>
        <input
          className="form-control"
          type="text"
          placeholder="Your phone"
          onChange={event => this.setState({ phone: event.target.value })}
        />
        <span>Pas</span>
        <input
          className="form-control"
          type="text"
          placeholder="Your phone"
          onChange={event => this.setState({ password: event.target.value })}
        />
        <button type="button" className="btn btn-success">
          Login
        </button>
      </span>
    );
  }
}

export default Login;
