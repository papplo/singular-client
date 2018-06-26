import React, { Component } from 'react';

export default class TagCloud extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentWillMount() {
  //   console.log('will mount');
  // }
  //
  // componentDidUpdate() {
  //   console.log('did update');
  //   let element = this.props.categories.map((e)=> (e.name));
  // }

  renderCats = () => {
    if ( typeof this.props.categories === 'object') return null
    return this.props.categories.map((elem) => {
      return <span
          key={elem.pk_category_id}
          className="tag is-rounded is-medium is-dark">
          {elem.name}
        </span>
      }
    )
  };

  render() {
    console.log(this.props);
    return (
      <div className="tags">
        {this.props.categories && this.renderCats()}
      </div>
    );
  }
}
