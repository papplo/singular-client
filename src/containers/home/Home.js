import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { fetchLocationAction, fetchCategoriesAction, fetchSkillsActionCreator } from '../../store/actions/actions';
import { BulmaBoiler, TagCloud } from '../../components/'

class Home extends Component {
  
  componentWillMount() {
    if (this.props.location.status === 'unloaded') this.props.getLocation();
  }

  componentDidUpdate() {
    if (this.props.location.status === 200 && this.props.categories.status === 'unloaded') this.props.getCategories();
    if (this.props.location.status === 200 && this.props.skills.status === 'unloaded') this.props.getSkills();
  }

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

const mapDispatchToProps = (dispatch) => ({
  getLocation: () => dispatch(fetchLocationAction),
  getCategories: () => dispatch(fetchCategoriesAction),
  getSkills: (location) => dispatch(fetchSkillsActionCreator(location)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  getSkills: () => dispatchProps.getSkills(stateProps.location)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);
