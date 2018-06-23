import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SkillProfile.css';



class SkillProfile extends Component {
  render () {
    return (
      <div>
        <p>SkillProfile Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SkillProfile);