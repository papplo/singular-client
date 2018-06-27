import React, { Component } from 'react';
import AsyncList from '../AsyncList';
import { Link } from 'react-router-dom';

export default class TagCloud extends AsyncList {



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
              <span
                className="tag is-rounded is-medium is-capitalized">
                {elem.name}
              </span>
            </Link>
          )
        )}
      </div>
    );
  }
}
