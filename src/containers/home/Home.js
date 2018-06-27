import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { BulmaBoiler, TagCloud } from '../../components/'

class Home extends Component {

  render () {
    return (
      <div className='HomeContainer'>
        <TagCloud
          categories={this.props.categories}
          size="medium"
        />
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  location: state.location,
  categories: state.categories,
  skills: state.skills
});

export default connect(mapStateToProps)(Home);
