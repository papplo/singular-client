import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import pathParser from '../../services/pathparser';
import { fetchUserActionCreator } from '../../store/actions/actions';
import { Reviews, User, ActivityList, SkillList } from '../../components/';


//PATH: root/user_id
//The whole user and associated skills and reviews available in this.props.user.body
class Profile extends Component {
  componentDidMount() {
    this.initialize();
  }

  componentWillUnmount() {
    this.props.clear('FETCH_USER_CLEAR');
  }

  componentWillUnmount() {
    this.props.clear('ID_SKILL_CLEAR');
    this.props.clear('FETCH_USER_CLEAR');
  }

  initialize = async () => {
    const userID = (await pathParser(this.props.location.pathname)).first;
    if (!userID) return;
    this.props.fetchUser(userID);
  }

  render () {
    console.log('here', this.props.skills.status);
    return (
      <div className="container user-profile">
        <div className="section user-bio has-half-padding">
          <User user={this.props.user}>
            <p className="subtitle is-6 is-serif has-half-padding has-text-grey ">{this.props.user.status === 200 && this.props.user.body.description}</p>
          </User>
        </div>

        <div className="section user-skills has-half-padding">
          <p className="title is-5 has-text-grey-dark">
            See what {this.props.user && this.props.user.body.name} shares  <span className="icon is-small has-text-primary">
              <i className="fas fa-arrows-alt-h"></i>
            </span>


          </p>
          <SkillList cards={true} skills={this.props.user.status === 200 && this.props.user.body.skills }/>
        </div>

        <div className="section user-reviews has-half-padding-top">
          <p className="title is-4 has-text-grey-dark">
            What other people say
          </p>
            <Reviews elem={this.props.user} />
        </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  skills: state.skills,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUserActionCreator(id)),
  clear: (actionType) => dispatch({type: actionType}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
