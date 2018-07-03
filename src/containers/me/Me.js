import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import './Me.css';
import { updateProfileActionCreator, createSkillActionCreator, fetchProfileActionCreator } from '../../store/actions/actions';
import ProfileForm from '../../components/forms/ProfileForm';

// INSTURCTIONS
// to update profile: this.putUpdatedProfile(userObj)

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me: 'unloaded',
      skillSubmitted: false
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

  postNewSkill = (newSkill) => {
    this.props.postSkill(newSkill, this.props.token);
    this.setState({skillSubmitted: true})
  }


  showSubmitProfile = (event) => {
    event.preventDefault();
    this.props.updateProfile(this.state.me, this.props.token);
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

  renderOrRedirect = () => {
    if (this.props.profile.status !== 200) return <Redirect to='/login' />
    else {
      return (
        <div className='MeContainer container'>
          <img src={this.state.me.img_url}></img>
          <p>Me Page, user: {this.props.profile.body.name}</p>
          <p>user? {this.state.me.name}</p>
          <button onClick={this.createMockSkill}>Create skill</button>

          <ProfileForm me={this.state.me} inputChange={this.handleInputChangeProfile}
            submit={this.showSubmitProfile}></ProfileForm>

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
  skillCreated: state.createSkill,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (me, token) => dispatch(updateProfileActionCreator(me, token)),
  postSkill: (skill, token) => dispatch(createSkillActionCreator(skill, token)),
  fetchProfile: (userToken) => dispatch(fetchProfileActionCreator(userToken)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Me);
