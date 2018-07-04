import React from 'react'
import './ConversationCard.css'
import { Link } from 'react-router-dom';

const ConversationCard = (props, buttons, toggle, token) => {

  const renderButtons = () => {
    if (buttons === 0) return <p>waiting for approval</p>
    if (buttons === 1) return [
      <a class="button is-success" onClick={() => toggle(props.pk_conversation_id, 'accept', token)}>
        <span class="icon">
          <i class="fas fa-user-check"></i>
        </span>
        <span>Approve</span>
      </a>,
      <a style={{marginLeft: '10px'}} class="button is-danger is-danger" onClick={() => toggle(props.pk_conversation_id, 'reject', token)}>
        <span class="icon">
          <i class="fas fa-user-times"></i>
        </span>
        <span>Reject</span>
      </a>
    ]
    if (buttons === 2) return (
      <a class="button is-primary" onClick={() => toggle(props.pk_conversation_id)}>
        <span class="icon">
          <i class="far fa-comment-dots"></i>
        </span>
        <span>Chat</span>
      </a>
    )
    
  }

  const renderDelete = () => {
    if (buttons !== 1) return <button class="delete"></button>;
  }

  return (
    <article class="media">
      <figure class="media-left">
        <p class="image is-96x96">
          <img src={props.contact_img_url} className="is-circular"/>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{props.contact_name}</strong> <small>{' #' +props.skill_title}</small>
            <br/>
            {props.request_message}
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            {renderButtons()}
          </div>
        </nav>
      </div>
      <div class="media-right">
        {renderDelete()}
      </div>
    </article>
  )
}

export {
  ConversationCard,
}