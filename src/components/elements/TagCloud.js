
import React, { Component } from 'react';

export default class TagCloud extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.categories);
    return (
      <div className="tags">
        <span className="tag is-rounded is-medium is-black">Black</span>
        <span className="tag is-rounded is-medium is-dark">Dark</span>
        <span className="tag is-rounded is-medium is-light">Light</span>
        <span className="tag is-rounded is-medium is-white">White</span>
        <span className="tag is-rounded is-medium is-primary">Primary</span>
        <span className="tag is-rounded is-medium is-link">Link</span>
        <span className="tag is-rounded is-medium is-info">Info</span>
        <span className="tag is-rounded is-medium is-success">Success</span>
        <span className="tag is-rounded is-medium is-warning">Warning</span>
        <span className="tag is-rounded is-medium is-danger">Danger</span>
      </div>
    );
  }
}
