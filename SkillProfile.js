import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SkillProfile.css';
import pathParser from '../../services/pathparser';
import { fetchIdSkillActionCreator, fetchUserActionCreator } from '../../store/actions/actions';
import { User } from '../../components/';

//PATH: root/skill_id
class SkillProfile extends Component {

  componentWillMount() {
    this.initialize()
  }

  componentDidUpdate() {
    if (this.props.skill.status === 200 && this.props.user.status === 'unloaded') {
      this.props.fetchUser(this.props.skill.body.fk_user_id)
    }
  }

  initialize = async () => {
    const skillId = (await pathParser(this.props.location.pathname)).first;
    if (!skillId) return;
    this.props.idSkill(skillId);
    if (this.props.skill.status === 200 && this.props.user.status === 'unloaded') {
      this.props.fetchUser(this.props.skill.body.fk_user_id)
    }
  }

  render () {
    return (
      <div className="container skill-profile" >
        <User user={this.props.user}></User>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  skill: state.idSkill,
  user: state.user,
  skills: state.genreSkill

});
const mapDispatchToProps = (dispatch) => ({
  idSkill: (id) => dispatch(fetchIdSkillActionCreator(id)),
  fetchUser: (id) => dispatch(fetchUserActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillProfile);
