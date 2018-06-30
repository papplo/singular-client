import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Me.css';
import { updateProfileActionCreator, createSkillActionCreator } from '../../store/actions/actions';

// INSTURCTIONS
// to update profile: this.putUpdatedProfile(userObj)

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
  
  putUpdatedProfile = (updatedMe) => {
    this.setState({me: updatedMe});
    this.props.updateProfile(this.state.me, this.props.token)
  }
  
  postNewSkill = (newSkill) => {
    
  }

  renderOrRedirect = () => {
    if (this.props.profile.status !== 200) return <Redirect to='/login' />
    else {
      console.log('me: ', this.state.me)
      return (
        <div className='MeContainer'>
          <img src={this.state.me.img_url}></img>
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
  postSkill: (skill, token) => dispatch(createSkillActionCreator(skill, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Me);