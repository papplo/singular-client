import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SkillProfile.css';
import pathParser from '../../services/pathparser'
import { fetchIdSkillActionCreator, fetchUserActionCreator } from '../../store/actions/actions';

//PATH: root/skill_id
class SkillProfile extends Component {

  componentWillMount() {
    console.log('component mounting');
    this.initialize()
  }

  componentDidUpdate() {
    console.log('component updating');
    console.log('skill: ', this.props.skill)
    console.log('user: ', this.props.user)
    if (this.props.skill.status === 200 && this.props.user.status === 'unloaded') {
      this.props.fetchUser(this.props.skill.body.creator_id)
    }

    
  }

  initialize = async () => {
    const skillId = await pathParser(this.props.location.pathname);
    if (!skillId.first) return;
    console.log('next idskill');
    this.props.idSkill(skillId.first);
  }
  render () {
    return (
      <div>
        <p>SkillProfile Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  skill: state.idSkill,
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  idSkill: (id) => dispatch(fetchIdSkillActionCreator(id)),
  fetchUser: (id) => dispatch(fetchUserActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillProfile);
