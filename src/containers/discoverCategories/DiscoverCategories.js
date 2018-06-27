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
          title="Discover Skills"
          userLocation={this.props.userLocation} />
        <TagCloud categories={this.props.categories} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLocation: state.userLocationReducer,
  categories: state.getCategories,
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverCategories);
