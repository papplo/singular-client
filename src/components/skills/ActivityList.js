import React, { Component } from 'react';
import AsyncList from '../AsyncList';

export default class ActivityList extends AsyncList {
  render() {
    return <section className="section">
      <div className="container">
        {this.renderAsyncList(
          this.props.skills.status,
          this.props.skills.body,
          (elem) => (
            <article className="media" key={elem.pk_skill_id}>
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={elem.img_url? elem.img_url:"https://bulma.io/images/placeholders/96x96.png"} alt="Placeholder image" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{elem.title}</strong>
                  <br />
                  By {elem.creator_name}
                </p>
              </div>
            </div>
            <div className="media-right">
              <small>Learn more</small>
            </div>
          </article>
          )
        )}
      </div>
    </section>
    }
}
