import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityList } from '../../components/'

import './Category.css';
import pathParser from '../../services/pathparser'
import categoryId from '../../services/categoryId'
import { fetchSkillsActionCreator } from '../../store/actions/actions';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialize: false,
      category: '',
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
    console.log('category', categoryName);
    if (!categoryName.first) return;
    this.setState({category: categoryName.first});
    const categoryID = await categoryId(this.props.categories.body, categoryName.first);
    this.props.genreSkills(this.props.userLocation, categoryID)
  }

  filterList = (event) => {
    // make spinner loader appear
    //event.currentTarget.classList.add('is-loading');
    //event.currentTarget.children[1].classList.remove('fa-search');
    // event.currentTarget.children[1].classList.add('fa-times');


    let updatedList = this.props.skills.body;

    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredList: {
      status: 200,
      body: updatedList
    }});
    // event.currentTarget.classList.remove('is-loading');
  }

  iconRender = ()  => {
    return (
    <span className="icon is-small is-right">
      <i className="fas fa-search"></i>
    </span>
    )
    
  }

  renderBackground = () => {
    for (let i = 0; i < this.props.categories.body.length; i++) {
      if (this.state.category === this.props.categories.body[i].name) {
        return this.props.categories.body[i].img_url;
      }
    }
    return 'https://images.unsplash.com/photo-1530636290704-ea332c92a637?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f20504304882f1f3a4244af47c9dc0e&auto=format&fit=crop&w=802&q=80'
  }
  //`url(${this.renderBackground()})`
  render () {
    console.log('skills: ', this.props.skills);
    return (
      <div className="discover-category">
        <section style={{background: "url(" + this.renderBackground() + ")"}} className="section is-center has-stroke-bottom has-half-padding-top has-text-warning has-bg-img">
          <div className="container category-title">
            <h1 className="title is-capitalized has-text-white has-text-weight-bold	 is-2">
              {this.state.category}
            </h1>
          </div>
        </section>
        <ActivityList skills={this.state.filteredList || this.props.skills}>
          <div className="field">
              <div className="control has-icons-right is-medium"
                onChange={(e) => this.filterList(e)}>
                <input type="search" className="input is-medium" type="email" placeholder="Search for a tag, name or person" />
                {this.iconRender()}
              </div>
          </div>
          <p className="subtitle">
            See whats´s offered in {this.props.userLocation.status === 200 && this.props.userLocation.body.city}
          </p>
        </ActivityList>
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
