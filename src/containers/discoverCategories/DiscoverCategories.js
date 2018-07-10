import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserLocationAction, fetchCategoriesAction, fetchSkillsAction } from '../../store/actions/actions';

import { Hero, BulmaBoiler, TagCloud, ActivityList } from '../../components/'
import './DiscoverCategories.css';



class DiscoverCategories extends Component {
  render () {
    return (
      <div className="discover-categories">
        <Hero
          color="light"
          title="Explore all categories in "
          userLocation={this.props.location}>
          <h2 className="subtitle has-text-centered is-size-5 has-text-grey">
            Not in {this.props.location.status === 200 && this.props.location.body.city}? <strong>Change your location</strong>!
          </h2>
        </Hero>
        <div className="section">
          <TagCloud
            categories={this.props.categories}
            renderColor={true}/>
        </div>
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
