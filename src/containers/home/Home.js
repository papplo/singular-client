import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

import { fetchUserLocationAction, fetchCategoriesAction, fetchSkillsAction } from '../../store/actions/actions';

import { BulmaBoiler, TagCloud } from '../../components/'

class Home extends Component {

  componentWillMount() {
    if (this.props.userLocation.status === 'unloaded') this.props.getUserLocation();
  }

  componentDidUpdate() {
    console.log('component updated');
    if (this.props.userLocation.status === 200 && this.props.categories.status === 'unloaded') this.props.getCategories();
    if (this.props.userLocation.status === 200 && this.props.skills.status === 'unloaded') this.props.getSkills();
  }

  render () {
    return (
      <div>
        <TagCloud
          categories={this.props.categories}
          size="medium"
        />
        <BulmaBoiler
          userLocation={this.props.userLocation}
          skills={this.props.skills}
        />
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  userLocation: state.userLocationReducer,
  categories: state.getCategories,
  skills: state.getCategories
});

const mapDispatchToProps = (dispatch) => ({
  getUserLocation: () => dispatch(fetchUserLocationAction),
  getCategories: () => dispatch(fetchCategoriesAction),
  getSkills: () => dispatch(fetchSkillsAction),

});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
