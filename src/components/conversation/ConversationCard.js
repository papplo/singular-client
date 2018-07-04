import React from 'react'
import './ConversationCard.css'
import { Link } from 'react-router-dom';

const ConversationCard = (props, buttons, toggle, token) => {

  const renderButtons = () => {
    if (buttons === 0) return <p>waiting for approval</p>
  //   if (buttons === 1) return [
  //   <button onClick={() => toggle(props.pk_conversation_id, 'accept', token)}>Approve</button>, 
  //   <button  onClick={() => toggle(props.pk_conversation_id, 'reject', token)}>Ignore</button>
  // ]
    if (buttons === 1) return [
      <a className="button is-success" onClick={() => toggle(props.pk_conversation_id, 'accept', token)}>
        <span className="icon">
          <i className="fas fa-user-check"></i>
        </span>
        <span>Approve</span>
      </a>,
      <a style={{marginLeft: '10px'}} className="button is-danger is-danger" onClick={() => toggle(props.pk_conversation_id, 'reject', token)}>
        <span className="icon">
          <i className="fas fa-user-times"></i>
        </span>
        <span>Reject</span>
      </a>
    ]
    if (buttons === 2) return (
      <a className="button is-primary" onClick={() => toggle(props.pk_conversation_id)}>
        <span className="icon">
          <i className="far fa-comment-dots"></i>
        </span>
        <span>Chat</span>
      </a>
    )
    
  }

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-96x96">
          <img src={props.contact_img_url}/>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.contact_name}</strong> <small>{' #' +props.skill_title}</small>
            <br/>
            {props.request_message}
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            {renderButtons()}
          </div>
        </nav>
      </div>
      <div className="media-right">
        <button className="delete"></button>
      </div>
    </article>
  )
}

export {
  ConversationCard,
}