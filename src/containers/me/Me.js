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
      skillSubmitted: false,
      name: '',
      surname: '',
      email: '',
      dateOfBirth: '',
      nationality: '',
      description: ''
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

  createMockSkill = () => {
    console.log('creating skill')
    const body = {
      title: '101: Sauna techniques',
      description: 'Curious about how to bath in a Sauna? -step in, and experience something unique!',
      img_url: 'https://d34ip4tojxno3w.cloudfront.net/app/uploads/Finland_sauna-400x300.jpg',
      location: 'Barcelona',
      fk_user_id: '29cda09d-3a3e-44b5-9250-70674d843d87',
      fk_category_id: '9e343b15-64d3-4f56-81b0-98de27a66a8c',
    }
    this.props.postSkill(body, this.props.token);
  }

  showSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  handleInputChange = (event) => {
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

          <ProfileForm me={this.state.me} inputChange={this.handleInputChange}
            submit={this.showSubmit}></ProfileForm>

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
