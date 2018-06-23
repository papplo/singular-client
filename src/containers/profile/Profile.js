import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';



class Profile extends Component {
  render () {
    return (
      <div>
        <p>Profile Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);