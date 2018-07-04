import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Me.css';
import { ProfileForm, SkillForm, SkillList, User } from '../../components/'
import { updateProfileActionCreator, createSkillActionCreator, fetchProfileActionCreator } from '../../store/actions/actions';

// INSTURCTIONS
// to update profile: this.putUpdatedProfile(userObj)

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me: 'unloaded',
      skillSubmitted: false,
      showOrCreate: 'show',
      updateStatus: false
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
    if (this.props.updateProfile.status === 201 && this.state.updateStatus === false) {
      this.setState({updateStatus: true})
    }
  }

  componentWillUnmount () {
    this.props.clear('UPDATE_PROFILE_CLEAR');
  }

  postNewSkill = (newSkill) => {
    this.props.postSkill(newSkill, this.props.token);
    this.setState({skillSubmitted: true})
  }

  showSubmitProfile = (event) => {
    event.preventDefault();
    this.props.updateProfile(this.state.me, this.props.token);
    this.setState({updateStatus: true})
  }

  handleInputChangeProfile = (event) => {
    const target =event.target;

    const newMe = this.state.me;
    newMe[target.name] = target.value;
    this.setState({
      me: newMe
    },
    () => console.log('this.state.me['+target.name+']:', this.state.me[target.name])
    )
  }

  createSkill = (skill) => {
    this.props.createSkill(skill, this.props.token);
    this.setState({
      showOrCreate : 'show',
      skillSubmitted: true
    });
  }

  goToAddSkill = () => {
    this.setState({showOrCreate : 'create'});
  }

  goToShowSkills = () => {
    this.setState({showOrCreate : 'show'});
  }

  showOrCreateSkills = () =>{
    if (this.state.showOrCreate === 'show') {
      return (
        <div className="section">
          <div className="level">
            <p className="title is-4 level-left">Your Skills</p>
            <button className="button is-primary level-right" onClick={this.goToAddSkill}>
              Add a new Skill</button>
          </div>
          <SkillList skills={this.props.profile.body.skills}/>
        </div>
      )
    } else {
      return (
        <div className="section">
          <div className="level">
            <p className="title is-4 level-left">Create a new Skill</p>
            <button className="button is-primary level-right" onClick={this.goToShowSkills}>
              Go back</button>
          </div>
          <SkillForm  categories = {this.props.categories} profile={this.props.profile}
            createSkill={this.createSkill}/>
        </div>
      );
    }
  }

  renderOrRedirect = () => {
    if (!this.props.profile.body.pk_user_id) return <Redirect to='/login' />
    else {
      return (
        <div className='MeContainer container'>
          <User user={this.props.profile}/>
          <ProfileForm me={this.state.me} inputChange={this.handleInputChangeProfile}
            submit={this.showSubmitProfile} updateStatus={this.state.updateStatus}/>
          {this.showOrCreateSkills()}
        </div>
      )
    }
  }

  render () {
    return (
      <div>{this.renderOrRedirect()}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  token: state.token,
  skillCreated: state.createSkill,
  categories: state.categories,
  updateProfile: state.updateProfile
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (me, token) => dispatch(updateProfileActionCreator(me, token)),
  fetchProfile: (userToken) => dispatch(fetchProfileActionCreator(userToken)),
  createSkill: (skill, token) => dispatch(createSkillActionCreator(skill, token)),
  clear: (actionName) => dispatch({type: actionName})
});
export default connect(mapStateToProps, mapDispatchToProps)(Me);
