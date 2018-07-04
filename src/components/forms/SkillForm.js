import React, { Component } from 'react';

export default class SkillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description:'',
      location:'',
      fk_category_id:'',
      img_url:'',
      photo:'',
      showDropDown: 'none',
      selectedCategory: 'Choose Category'
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
    if (event.target.name === "fk_category_id" && event.target.value !== 'false') {
      const category = this.props.categories.body.find(category => category.pk_category_id === event.target.value);
      return (
        this.randomPhotos(category.name)
      )
    } else {
      this.setState({photo: ''})
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const newSkill= {
      ...this.state,
      fk_user_id: this.props.profile.body.pk_user_id,
    }
    this.props.createSkill(newSkill)
  }

  categoriesMap = () => {

    if (this.props.categories.status === 200) {
      return (
        <select className="Options" name="fk_category_id" value={this.state.fk_category_id} onChange={this.handleChange}>
          <option value='false'>Choose one...</option>
          {
            this.props.categories.body.map((category, index) => {
            return (<option key={index} value={category.pk_category_id}>{category.name}</option>)
            })
          }
        </select>
      )
    }
  }

  randomPhotos = (category) => {
    fetch(`http://source.unsplash.com/1600x900/?${category}`).
    then(response =>  this.setState({
      photo: response.url,
      img_url: response.url
    }))
  }

  handleDropDownClick = (event) => {
    event.preventDefault();
    console.log('dropdown clicked');
    if(this.state.showDropDown === 'none')
      this.setState({showDropDown: 'block'});
    else {
      this.setState({showDropDown: 'none'});
    }
  }

  handleDropDownItemClick = (category) => {
    console.log('category', category);
    this.setState({
      showDropDown: 'none',
      fk_category_id: category.pk_category_id,
      selectedCategory: category.name
    });
    this.randomPhotos(category.name)
  }

  dropDownItems = () => {
    if (this.props.categories.status === 200) {
      const categories = this.props.categories.body;
      return (
        categories.map((category, index) => {
          return(
            <div key={category.pk_category_id}>
              {index === 0 ? null : <hr className="dropdown-divider"/>}
              <a className="dropdown-item" onClick={() => this.handleDropDownItemClick(category)}
                value={category.pk_category_id}>
                {category.name}
              </a>
            </div>
          )
        })
      );
    }
  }

  reloadImage = () => {
    if (this.state.selectedCategory === 'Choose Category') return null;
    else {
      return (
        <button className="button" onClick={(event)=>{
          event.preventDefault();
          this.randomPhotos(this.state.selectedCategory)
        }}>
          Reload Image
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            Title:
            <input className="input" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label className="label">
            Description:
            <textarea className="textarea" placeholder="Explain something about what you want to share" name="description"
              value={this.handleChange.description} onChange={this.handleChange} autoComplete="off"></textarea>
          </label>
          <label className="label">
            Location:
            <input className="input" name="location" type="text" value={this.state.location} onChange={this.handleChange} />
          </label>

          <div className="columns">
            <div className="is-one-third column">
              <div className="dropdown is-active">
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu"
                    onClick={this.handleDropDownClick}>
                    <span>{this.state.selectedCategory}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu"
                  style={{display: this.state.showDropDown}}>
                  <div className="dropdown-content">
                    {this.dropDownItems()}
                  </div>
                </div>
              </div>
              {this.reloadImage()}
            </div>
            <div className="column">
              <img src={this.state.photo}></img>
            </div>
          </div>

          <button className="button is-link" type="submit">Save Skill</button>
        </form>
      </div>
      );
  }
}
