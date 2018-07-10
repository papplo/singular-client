import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Login.css';
import FacebookLogin from 'react-facebook-login';
import { fetchProfileActionCreator, saveUserTokenActionCreator } from '../../store/actions/actions';

class Login extends Component {

  responseFacebook = (response) => {
    this.props.fetchProfile(response.accessToken);
    this.props.saveUserToken(response.accessToken);
  }

  logInOrRedirect = () => {
    if (this.props.profile.status === 200) {
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
        {this.logInOrRedirect()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (userToken) => dispatch(fetchProfileActionCreator(userToken)),
  saveUserToken: (userToken) => dispatch(saveUserTokenActionCreator(userToken)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);