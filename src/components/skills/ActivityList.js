import React, { Component } from 'react';
import AsyncList from '../AsyncList';
import { Link } from 'react-router-dom';

export default class ActivityList extends AsyncList {
  render() {
    return <section className="section has-half-padding-top">
      <div className="container">
        {this.props.children}
        {this.renderAsyncList(
          this.props.skills.status,
          this.props.skills.body,
          (elem) => (
            <Link key={elem.pk_skill_id} to={'/skill-profile/' + elem.pk_skill_id}>
            <article className="media" key={elem.pk_skill_id}>
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
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
          </Link>
          )
        )}
      </div>
    </section>
    }
}
