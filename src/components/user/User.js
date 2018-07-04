import React, { Component } from 'react';
import AsyncList from '../AsyncList';
import { Link } from 'react-router-dom';
import './User.css';
import Moment from 'react-moment';

export default class User extends AsyncList {

  render() {
    return (

      <div >
        {this.renderAsyncList(
          this.props.user.status,
          [this.props.user.body],
          (user) => {
            return (
            <div key={user.pk_user_id}>
              <Link
                className="custom"
                to={'/profile/' + user.pk_user_id}
                key={user.pk_user_id}>
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                          <img className="is-circular is-64x64" src={user.img_url} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="media-content ">
                      <p className="title is-3 is-serif is-marginless	">{user.name + ' ' + user.surname}</p>
                      <p className="subtitle is-6 is-marginless	">
                        <Moment fromNow ago >{user.date_of_birth}</Moment>
                        <span>{user.current_location && ', ' + user.current_location + ', '}</span>
                        <span>{user.reviews && user.reviews.length + ' reviews'}</span>
                      </p>
                    </div>
                </div>
              </Link>
              <div>
                {this.props.children}
              </div>
            </div>
          )
          }
      )}
      </div>
    )
  }
}
