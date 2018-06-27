import React, { Component } from 'react';

export default class TagCloud extends Component {
  renderCats = () => {
    if ( this.props.categories.status === 'unLoaded') return 'no data';
    else if (this.props.categories.status === 'Loading') return 'loading';
    else if (this.props.categories.status === 'Failure') return 'not able to connect to server';
    if (this.props.categories.status === 200) {
      return this.props.categories.body.map((elem) => { // this.props.categories.status === 200
        return <span
          key={elem.pk_category_id}
          className="tag is-rounded is-medium is-dark">
          {elem.name}
          </span>;
      })
    }
  };

  render() {
    return (
      <div className="tags">
        {this.renderCats()}
      </div>
    );
  }
}
