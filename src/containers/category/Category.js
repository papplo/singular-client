import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Category.css';
import pathParser from '../../services/pathparser'
import categoryId from '../../services/categoryId'
import { fetchSkillsActionCreator } from '../../store/actions/actions';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialize: false,
    }
  }
  
  componentWillMount() {
    if (this.props.categories.status === 200 && this.props.userLocation.status === 200 && !this.state.initialize) this.initialize();
  }

  componentDidUpdate() {
    if (this.props.categories.status === 200 && this.props.userLocation.status === 200 && !this.state.initialize) this.initialize();
  }

  initialize = async () => {
    this.setState({initialize: true})
    const categoryName = await pathParser(this.props.location.pathname);
    if (!categoryName.name) return;
    const categoryID = await categoryId(this.props.categories.body, categoryName.name);
    this.props.genreSkills(this.props.userLocation, categoryID)
  }

  //CAN DELETE THIS --- JUST EXAMPLE OF RENDERING SKILLS IN GIVEN CATEGORY -----
  renderSkills = () => {
    console.log('skills: ', this.props.skills);
    if (this.props.skills.status !== 200) return null;
    return this.props.skills.body.map(skill => {
      return <p>{skill.title}</p>
    })
  }
  //-----------------------------------------------------------------------------

  render () {
    return (
      <div>
        <p>Category Page </p>
        {/* CAN DELETE RENDERSKILLS(), JUST EXAMPLE */}
        {this.renderSkills()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLocation: state.location,
  categories: state.categories,
  skills: state.genreSkills
});

const mapDispatchToProps = (dispatch) => ({
  genreSkills: (userLocation, category) => dispatch(fetchSkillsActionCreator(userLocation, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);