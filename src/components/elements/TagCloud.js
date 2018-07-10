import React, { Component } from 'react';
import AsyncList from '../AsyncList';
import { Link } from 'react-router-dom';

export default class TagCloud extends AsyncList {

  renderTags = (elem) => {
    if (this.props.renderColor) {
      return(
        <span className="tag is-rounded is-large is-capitalized is-primary">
        {elem.name}
        </span>
      )
    } else {
      return(
        <span className="tag is-rounded is-large is-capitalized is-outlined">
          {elem.name}
        </span>
      )
    }
  }

  render() {
    return (
      <div className="tags is-centered">
        {this.renderAsyncList(
          this.props.categories.status,
          this.props.categories.body,
          (elem) => (
            <Link
              key={elem.pk_category_id}
              to={'category/' + elem.name}>
                {this.renderTags(elem)}
            </Link>
          )
        )}
      </div>
    );
  }
}
