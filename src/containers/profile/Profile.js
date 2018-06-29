import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import pathParser from '../../services/pathparser';
import { fetchUserActionCreator } from '../../store/actions/actions';


//PATH: root/user_id
//The whole user and associated skills and reviews available in this.props.user.body
class Profile extends Component {
  componentDidMount() {
    this.initialize();
  }
  initialize = async () => {
    const userID = (await pathParser(this.props.location.pathname)).first;
    this.props.fetchUser(userID);
  }
  render () {
    return (
      <div>
        <p>Profile Page</p>
        <p>{this.props.user.status}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUserActionCreator(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);