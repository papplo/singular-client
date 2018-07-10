import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Hero, BulmaBoiler, TagCloud, ActivityList } from '../../components/'
import './Home.css';

class Home extends Component {

  componentWillUnmount() {
    this.props.clear('FETCH_SKILLS_CLEAR');
  }

  render () {
    return (
      <div>
        <Hero
          color="light"
          title="You're never too cool to learn something new "
          userLocation="">
          <TagCloud
            categories={this.props.categories}/>
          <p className="is-size-5 has-text-centered">
            Choose one or
            <Link to="/discover-categories"> explore all categories</Link>
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

const mapDispatchToProps = (dispatch) => ({
  clear: (actionType) => dispatch({type: actionType})
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
