import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import pathParser from '../../services/pathparser';
import { fetchUserActionCreator } from '../../store/actions/actions';
import {  Reviews, User  } from '../../components/';


//PATH: root/user_id
//The whole user and associated skills and reviews available in this.props.user.body
class Profile extends Component {
  componentDidMount() {
    this.initialize();
  }

  componentWillUnmount() {
    this.props.clear('FETCH_USER_CLEAR');
  }

  initialize = async () => {
    const userID = (await pathParser(this.props.location.pathname)).first;
    if (!userID) return;
    this.props.fetchUser(userID);
  }
  render () {
    return (
      <div>
      <div className="container skill-profile">
        <User user={this.props.user}/>
      </div>
      <div className="container skill-reviews">
        <p className="subtitle has-text-centered is-size-12 ">
          What other people say...
        </p>
        <Reviews elem={this.props.user}/>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUserActionCreator(id)),
  clear: (actionType) => dispatch({type: actionType}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
