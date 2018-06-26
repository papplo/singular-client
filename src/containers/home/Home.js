import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { API } from '../../middleware/apiMiddleware';

import config from '../../config/config';

import { BulmaBoiler, TagCloud } from '../../components/'

class Home extends Component {

  componentWillMount() {
    if (!this.props.userLocation.status) this.props.getUserLocation();
    if (this.props.userLocation.status && !this.props.categories.status) this.props.getCategories();
    if (this.props.userLocation.status && !this.props.skills.status) this.props.getSkills();
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
  getUserLocation: () => dispatch({
    type: 'USER_LOCATION',
    [API]: {
      externalUrl: config.geolookup_url,
    }
  }),
  getCategories: () => dispatch({
    type:'GET_CATEGORIES',
    [API]: {
      endpoint: '/categories',
    }
  }),
  getSkills: () => dispatch({
    type:'GET_SKILLS',
    [API]: {
      endpoint: '/skills?location=Barcelona',
    }
  })



});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
