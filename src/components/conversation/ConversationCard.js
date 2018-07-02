import React from 'react'
import './ConversationCard.css'
import { Link } from 'react-router-dom';

const ConversationCard = (props, buttons, putConversationStatus, token) => {

  const renderButtons = () => {
    if (buttons === 0) return <p>waiting for approval</p>
    if (buttons === 1) return [<button onClick={() => putConversationStatus(props.pk_conversation_id, 'accept', token)}>Approve</button>, <button  onClick={() => putConversationStatus(props.pk_conversation_id, 'reject', token)}>Ignore</button>]
    if (buttons === 2) return <button>Chat</button>
  }

  return (
    <div className='conversationCard'>
  
      <div className='conversationCardLeftCol'>
        <img className='conversationCardLeftColPic' src={props.contact_img_url}></img>
        <Link
          key={props.pk_conversation_id}
          to={'user/' + props.fk_sender_user_id}>
          <span
            className="tag is-rounded is-medium is-capitalized">
            visit profile
          </span>
        </Link>
      </div>

      <div className='conversationCardRightCol'>
        <div className='conversationCardRightColPerson'>
          <p>{props.contact_name}</p>
          <p>Topic: {props.skill_title}</p>
        </div>
        <div className='conversationCardRightColMessage'>
          <p>Hello rosita, i like your moves, dance moves. Would you consider teaching me sometime this week. In exchange i'd be happy to teach you how to lockpick your neighbours lockbox. Deal?</p>
        </div>
        <div className='conversationCardRightColButtons'>
          {renderButtons()}
        </div>
      </div>
    </div>
  )
}

export {
  ConversationCard,
}