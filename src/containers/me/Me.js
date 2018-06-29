import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Me.css';
import { updateProfileActionCreator } from '../../store/actions/actions';

// INSTURCTIONS
// to update profile: this.postUpdatedProfile(userObj)

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me: 'unloaded',
    }
  }

  componentWillMount() {
    this.setState({me: this.props.profile.body})
  }

  postUpdatedProfile = (updatedMe) => {
    this.setState({me: updatedMe});
    this.props.updateProfile(this.state.me, this.props.token)
  }

  renderOrRedirect = () => {
    if (this.props.profile.status !== 200) return <Redirect to='/login' />
    else {
      console.log('me: ', this.state.me)
      return (
        <div className='MeContainer'>
          <p>Me Page, user: {this.props.profile.body.name}</p>
          <p>user? {this.state.me.name}</p>
        </div>
      )
    }
  }

  render () {
    return (<div>{this.renderOrRedirect()}</div>)
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (me, token) => dispatch(updateProfileActionCreator(me, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Me);