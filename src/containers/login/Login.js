import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Login.css';
import FacebookLogin from 'react-facebook-login';
import { API } from '../../middleware/apiMiddleware';

// Once we have working server, replace the state and map dispatch 
// to props with the facebook response, witch in turn should should 
// dispatch a new user object to the redux state. After that the 
// loginorRedirect, function can check if we have a valid user, if 
// not proceed to login with the button, otherwise redirect to previous page

class Login extends Component {

  responseFacebook = (response) => {
    console.log('inside callback', response);
    this.setState({logged: true})
    this.props.fetchUser('123')
  }

  logInOrRedirect = () => {
    if (this.props.user.name) {
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
        <p>Login Page. user: {this.props.user.name}</p>
        {this.logInOrRedirect()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (FacebookUserToken) => dispatch({
    type: 'FETCH_USER',
    [API]: {
      headers: {
        'Authentication': 'lsakjdvoa97va3s2', //FacebookUserToken,
        'Content-Type': 'Application/JSON',
      },
      endpoint: '/me',
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);