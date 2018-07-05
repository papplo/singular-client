import React, { Component } from 'react';
import AsyncList from '../AsyncList';
import { Link } from "react-router-dom";
import Moment from 'react-moment';

export default class Reviews extends AsyncList {
  constructor(props) {
    super(props);
    this.state = {
    review: '',
    conversationId: '',
    sendReview: true
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({review: event.target.value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let conversation = this.props.profile.body.conversationsStartedByMe.find(conversation => conversation.fk_skill_id === this.props.elem.body.pk_skill_id);
    this.props.createReview(this.state.review, conversation.pk_conversation_id)
    this.setState({ sendReview: false })
  }

  addReview = () => {
    if(!this.props.profile || this.props.profile.status !== 200) return null
    let conversation = this.props.profile.body.conversationsStartedByMe.find(conversation => conversation.fk_skill_id === this.props.elem.body.pk_skill_id)
    if (conversation) {
      if(this.state.sendReview === true){
      return (
        <div className="container add-reviews">
          <p className="subtitle has-text-centered is-size-12 ">
            Write your review!
          </p>
          <div className="section">
          <textarea className="textarea" placeholder="Share your experience here" rows="6"
            value={this.state.review} onChange={this.handleChange} ></textarea>
            <p className="has-text-centered has-half-padding-top">
              <a onClick={this.handleSubmit} className="button is-round is-medium is-primary"
                type="submit">Add Review</a>
            </p>
          </div>
        </div>
      )
      } else {
        return (
          <div>
            <p className="title is-5 has-text-centered has-half-padding-top">Thank you for your review!</p>
          </div>
        )
      }
    }

  }

  render() {
    return (
      <div className="columns is-multiline">
        {this.props.elem.body && this.renderAsyncList(
          this.props.elem.status,
          this.props.elem.body.reviews,
          (review) => {
            return (
                <div className="column is-one-third">
                  <div className="card is-round card-review" key={review.pk_review_id}>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-64x64 ">
                            <img className="is-rounded" src={review.sender_img_url} alt="Avatar sender"/>
                          </figure>
                        </div>
                        <div className="media-content ">
                          <p className="title is-5 is-serif has-text-grey">{review.sender_name}</p>
                          <p className="subtitle is-6">{review.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )
          }
        )}
      {this.addReview()}
      </div>
    )
  }
}
