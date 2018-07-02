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
            <Link to={'/profile/' + user.pk_user_id} key={user.pk_user_id}>
            <div className="card">

              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-96x96">
                      <img className="is-rounded" src={user.img_url} alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div className="media-content ">
                    <p className="title is-6">{user.name + ' ' + user.surname}</p>
                    <p className="subtitle is-7"><Moment fromNow ago >{user.date_of_birth}</Moment>{', '}{user.current_location}</p>
                    <p className="subtitle is-7">{user.description}</p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          )
          }
      )}
      </div>
    )
  }
}
