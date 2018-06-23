import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DiscoverSkills.css';



class DiscoverSkills extends Component {
  render () {
    return (
      <div>
        <p>DiscoverSkills Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverSkills);