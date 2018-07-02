import React, { Component } from 'react';
import AsyncList from '../AsyncList';
//import './Reviews.css';
import Moment from 'react-moment';

export default class Reviews extends AsyncList {

  render() {
    return (
      <div >
        {this.props.elem.body && this.renderAsyncList(
          this.props.elem.status,
          this.props.elem.body.reviews,
          (review) => {
            return (
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-64x64 ">
                      <img className="is-rounded" src={review.sender_img} alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div className="media-content ">
                    <p className="subtitle is-6">{review.description}</p>
                    <p >{review.sender_name}</p>
                  </div>
                </div>
              </div>
            </div>
          )
          }
      )}
      </div>
    )
  }
}
