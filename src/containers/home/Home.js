import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Hero, BulmaBoiler, TagCloud, ActivityList } from '../../components/'
import './Home.css';

class Home extends Component {
  render () {
    return (
      <div>
        <Hero
          title="Learn something exiting today in "
          subTitle=""
          userLocation={this.props.location}>
          <TagCloud categories={this.props.categories}/>
          <p className="is-size-6 has-text-centered">Pick a Topic or
            <Link to="/discover-categories">explore all</Link>
          </p>
        </Hero>
        <ActivityList skills={this.props.skills}/>
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
