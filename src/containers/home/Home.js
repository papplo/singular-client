import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { API } from '../../middleware/apiMiddleware';

import config from '../../config/config';

class Home extends Component {

  componentWillMount() {
    // put a non-reloading fetch of user location
    this.props.userLocation !== '' && this.props.getUserLocation();
  }
  render () {
    return (
      <div>
        <p>HELLO WORLD</p>
      </div>
    )
  }
}

// Info needed (Client will provide): User location
//

// from server: 1. Array of 10 random skills (filtered by user area)
//              2. Array of 10 popular categories (filtered by user area)

const mapStateToProps = (state) => ({
  userLocation: state.userLocationReducer
});

const mapDispatchToProps = (dispatch) => ({
  getUserLocation: () => dispatch({
    type: 'USER_LOCATION',
    [API]: {
      endpoint: config.geolookup_url,
    }
  }),



});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
