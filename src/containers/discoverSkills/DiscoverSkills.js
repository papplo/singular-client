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
          color="dark"
          title="Discover what people offer to teach in "
          userLocation={this.props.location}>
          <h2 className="subtitle has-text-centered is-size-6 has-text-grey">
            Not in {this.props.location.status === 200 && this.props.location.body.city}? <strong>Change your location</strong>!
          </h2>
        </Hero>
        <ActivityList skills={this.props.skills}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.location,
  skills: state.skills,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverSkills);
