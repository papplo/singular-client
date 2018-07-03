import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Me.css';
import { updateProfileActionCreator, createSkillActionCreator, fetchProfileActionCreator, fetchRandomPhotoActionCreator } from '../../store/actions/actions';
import { SkillForm } from '../../components/'

// INSTURCTIONS
// to update profile: this.putUpdatedProfile(userObj)

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me: 'unloaded',
      skillSubmitted: false,
    }
  }

  componentWillMount() {
    this.setState({me: this.props.profile.body})
  }

  //Re-fetching the profile if new skill is being created created skill
  componentDidUpdate() {
    if (this.props.skillCreated.status === 201 && this.state.skillSubmitted === true)  {
      this.setState({skillSubmitted: false})
      this.props.fetchProfile(this.props.token);
    }
  }

  putUpdatedProfile = (updatedMe) => {
    this.setState({me: updatedMe});
    this.props.updateProfile(this.state.me, this.props.token)
  }

  postNewSkill = (newSkill) => {
    this.props.postSkill(newSkill, this.props.token);
    this.setState({skillSubmitted: true})
  }



  renderOrRedirect = () => {
    if (this.props.profile.status !== 200) return <Redirect to='/login' />
    else {
      return (
        <div className='MeContainer'>
          <img src={this.state.me.img_url}></img>
          <p>Me Page, user: {this.props.profile.body.name}</p>
          <p>user? {this.state.me.name}</p>
          <button onClick={this.createMockSkill}>Create skill</button>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
      <div>{this.renderOrRedirect()}</div>
      
      <div>
      <SkillForm randomPhotos ={(category)=>this.props.randomPhotos(category)} categories = {this.props.categories} profile={this.props.profile} createSkill={(skill)=>{this.props.createSkill(skill, this.props.token)}}/>
    </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  token: state.token,
  skillCreated: state.createSkill,
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (me, token) => dispatch(updateProfileActionCreator(me, token)),
  fetchProfile: (userToken) => dispatch(fetchProfileActionCreator(userToken)),
  createSkill: (skill, token) => dispatch(createSkillActionCreator(skill, token)),
  randomPhotos: (category) => dispatch(fetchRandomPhotoActionCreator(category))
});
export default connect(mapStateToProps, mapDispatchToProps)(Me);
