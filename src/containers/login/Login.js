import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Login.css';
import FacebookLogin from 'react-facebook-login';

// Once we have working server, replace the state and map dispatch 
// to props with the facebook response, witch in turn should should 
// dispatch a new user object to the redux state. After that the 
// loginorRedirect, function can check if we have a valid user, if 
// not proceed to login with the button, otherwise redirect to previous page

class Login extends Component {

  state = {
    logged: false,
  }

  responseFacebook = (response) => {
    console.log('inside callback', response);
    this.setState({logged: true})
  }

  logInOrRedirect = () => {
    if (this.state.logged) {
      return <Redirect to='/me' />
    } else {
      return (
      <FacebookLogin
        appId="269659623604674"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="facebookLoginButton"
        version="3.0"
      />)
    }
  }

  render () {
    return (
      <div>
        <p>Login Page</p>
        {this.logInOrRedirect()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);