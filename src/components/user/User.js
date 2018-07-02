import React, { Component } from 'react';
import AsyncList from '../AsyncList';
import { Link } from 'react-router-dom';
import './User.css';
import Moment from 'react-moment';

export default class User extends AsyncList {

  render() {
    console.log(this.props.user.body);
    return (

      <div >
        {this.renderAsyncList(
          this.props.user.status,
          [this.props.user.body],
          (user) => {
            return (
              <Link
                className="custom"
                to={'/profile/' + user.pk_user_id}
                key={user.pk_user_id}>
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                          <img className="is-circular" src={user.img_url} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="media-content ">
                      <p className="title is-3 is-serif is-marginless	">{user.name + ' ' + user.surname}</p>
                      <p className="subtitle is-6 is-marginless	">
                        <Moment fromNow ago >{user.date_of_birth}</Moment>
                        {user.current_location && ', ' + user.current_location + ', '}
                        {user.reviews && user.reviews.length + ' reviews'}
                      </p>
                    </div>
                  <p className="subtitle is-6 is-serif has-text-grey is-marginless is-hidden-touch">{user.description && user.description.slice(0, 100) + '...'}</p>
                </div>
              </Link>
          )
          }
      )}
      </div>
    )
  }
}
