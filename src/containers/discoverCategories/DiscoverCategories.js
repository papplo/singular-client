import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserLocationAction, fetchCategoriesAction, fetchSkillsAction } from '../../store/actions/actions';

import { Hero, BulmaBoiler, TagCloud, ActivityList } from '../../components/'
import './DiscoverCategories.css';



class DiscoverCategories extends Component {
  render () {
    return (
      <div>
        <Hero
          color="light"
          title="Discover Skills shared by Peers in "
          userLocation={this.props.location}>
          <h2 className="subtitle has-text-centered is-size-6 has-text-grey">
            Not in {this.props.location.status === 200 && this.props.location.body.city}? <strong>Change your location</strong>!
          </h2>
        </Hero>
        <TagCloud
          categories={this.props.categories} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.location,
  categories: state.categories,
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverCategories);
