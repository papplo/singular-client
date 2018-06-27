import React, { Component } from 'react';
import AsyncList from '../AsyncList';


export default class TagCloud extends AsyncList {
  render() {
    return (
      <div className="tags is-centered">
        {this.renderAsyncList(
          this.props.categories.status,
          this.props.categories.body,
          (elem) => (
            <span
              key={elem.pk_category_id}
              className="tag is-rounded is-medium is-capitalized">
              {elem.name}
            </span>
          )
        )}
      </div>
    );
  }
}
