import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserLocationAction, fetchCategoriesAction, fetchSkillsAction } from '../../store/actions/actions';

import { Hero, BulmaBoiler, TagCloud, ActivityList } from '../../components/'
import './DiscoverSkills.css';



class DiscoverSkills extends Component {
  render () {
    return (
      <div>
        <Hero
          title="Discover Skills offered in "
          userLocation={this.props.userLocation} />
        <ActivityList skills={this.props.skills}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLocation: state.userLocationReducer,
  skills: state.getSkills,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverSkills);
