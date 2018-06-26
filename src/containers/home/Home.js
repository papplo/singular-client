import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { API } from '../../middleware/apiMiddleware';

import config from '../../config/config';

import { BulmaBoiler, TagCloud } from '../../components/'

class Home extends Component {

  componentWillMount() {
    // put a non-reloading fetch of user location
    this.props.userLocation !== '' && this.props.getUserLocation();
    this.props.categories !== '' && this.props.getCategories();
    this.props.skills !== '' && this.props.getSkills();
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


// Info needed (Client will provide): User location
//

// from server: 1. Array of 10 random skills (filtered by user area)
//              2. Array of 10 popular categories (filtered by user area)

const mapStateToProps = (state) => ({
  userLocation: state.userLocationReducer,
  categories: state.getCategories,
  skills: state.getCategories
});

const mapDispatchToProps = (dispatch) => ({
  getUserLocation: () => dispatch({
    type: 'USER_LOCATION',
    [API]: {
      endpoint: config.geolookup_url,
    }
  }),
  getCategories: () => dispatch({
    type:'GET_CATEGORIES',
    [API]: {
      endpoint: config.apiary_url+'/categories',
    }
  }),
  getSkills: () => dispatch({
    type:'GET_SKILLS',
    [API]: {
      endpoint: config.apiary_url+'/skills?location=Barcelona',
    }
  })



});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
