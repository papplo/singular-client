import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

import { fetchUserLocationAction, fetchCategoriesAction, fetchSkillsAction } from '../../store/actions/actions';

import { Hero, BulmaBoiler, TagCloud, ActivityList } from '../../components/'

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
        <Hero userLocation={this.props.userLocation}>
          <TagCloud categories={this.props.categories}/>
          <p className="is-size-6 has-text-centered">Choose a Topic or explore all Skills</p>
        </Hero>
        <ActivityList skills={this.props.skills}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  userLocation: state.userLocationReducer,
  categories: state.getCategories,
  skills: state.getSkills
});

const mapDispatchToProps = (dispatch) => ({
  getUserLocation: () => dispatch(fetchUserLocationAction),
  getCategories: () => dispatch(fetchCategoriesAction),
  getSkills: () => dispatch(fetchSkillsAction),

});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
