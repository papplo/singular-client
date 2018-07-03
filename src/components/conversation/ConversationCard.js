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

  return (
    <article class="media">
      <figure class="media-left">
        <p class="image is-96x96">
          <img src={props.contact_img_url}/>
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
            {/* <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a> */}
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete"></button>
      </div>
    </article>

    // <div className='column'>
    // <div className='conversationCard columns'>
  
    //   <div className='conversationCardLeftCol column is-one-quarter'>
    //       <img className='conversationCardLeftColPic is-block' src={props.contact_img_url}></img>
    //       <Link className='is-block'
    //         key={props.pk_conversation_id}
    //         to={'user/' + props.fk_sender_user_id}>
    //         <span
    //           className="tag is-rounded is-medium is-capitalized">
    //           visit profile
    //         </span>
    //       </Link>
    //   </div>

    //   <div className='conversationCardRightCol column is-one-quarter'>
    //     <div className='conversationCardRightColPerson row'>
    //       <p>{props.contact_name}</p>
    //       <p>Topic: {props.skill_title}</p>
    //     </div>
    //     <div className='conversationCardRightColMessage row'>
    //       <p>{props.request_message}</p>
    //     </div>
    //     <div className='conversationCardRightColButtons row'>
    //       {renderButtons()}
    //     </div>
    //   </div>
    // </div>
    // </div>
  )
}

export {
  ConversationCard,
}