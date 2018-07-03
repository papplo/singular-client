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
      photo:''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
    if (event.target.name === "fk_category_id" && event.target.value !== 'false') {
      let category = this.props.categories.body.filter(category => category.pk_category_id === event.target.value);
      let categoryName = category[0].name
      return (
        this.randomPhotos(categoryName)
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
  )}
}

randomPhotos = (category) => {
  fetch(`http://source.unsplash.com/1600x900/?${category}`).
  then(response =>  this.setState({photo: response.url}))
}

setPhoto = () => {
  this.setState({img_url:this.state.photo})
  console.log(this.state);
}

render() {
  return (
    <div>
  <div className="field">
    <form onSubmit={this.handleSubmit}>
      <label className="label">
        Title:
        <input className="input" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
      </label>
      <label className="label">
        Description:
        <input className="input" name="description" type="text" value={this.state.description} onChange={this.handleChange} />
      </label>
      <label className="select">
            Category:
          {this.categoriesMap()}
      </label>
    <br/>
  <br/>
      <label className="label">
        Location:
        <input className="input" name="location" type="text" value={this.state.location} onChange={this.handleChange} />
      </label>
      <label className="label">
        Image:
        <input className="input" name="img_url" type="text" value={this.state.img_url} onChange={this.handleChange} />
      </label>
      <button className="button is-outlined is-round is-medium is-primary" type="submit" value="Submit"/>
    </form>
  </div>
  <div>
  <img src={this.state.photo} onClick={this.setPhoto}></img>
</div>
</div>
  );
}
}
