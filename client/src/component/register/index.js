import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchRegister } from '../../action/registerAction';
import './index.css';
//admin + private router
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      name: '',
      confirmPassword: ''
    };
  }
  // ComponentDidMount() {}
  register(e) {
    e.preventDefault();
    const { phone, password, name, confirmPassword } = this.state;
    this.props.fetchRegister({ phone, password, name, confirmPassword });
  }
  render() {
    // console.log(this.props.userInfo);
    return this.props.userInfo.success ? (
      <Redirect to="/home" />
    ) : (
      <div className="main-content">
        <form className="form-basic">
          <img src="https://i.imgur.com/KFWF7FX.png" alt="" />
          <div className="form-title-row">
            <h1>Register</h1>
          </div>
          <div className="form-row">
            <label>
              <span>Full name</span>
              <input
                type="text"
                name="name"
                id="name"
                required="required"
                onChange={event => this.setState({ name: event.target.value })}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>PhoneNumber: 059</span>
              <input
                name="numb"
                pattern="^\d{7}$"
                id="number"
                required="required"
                onChange={event => this.setState({ phone: event.target.value })}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                required="required"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                name="password_conf"
                id="passwordcon"
                required="required"
                onChange={event =>
                  this.setState({ confirmPassword: event.target.value })
                }
              />
            </label>
          </div>

          <div className="form-row">
            <button type="submit" onClick={event => this.register(event)}>
              Register
            </button>
            <h4>
              Already have an account?
              <Link to="/login">Login!</Link>
            </h4>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userInfo: state.Register.userInfo
  };
};
export default connect(mapStateToProps, { fetchRegister })(Register);
