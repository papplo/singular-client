import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Moment from 'react-moment';
// import { ConversationCard } from '../../components/conversation/ConversationCard'
// import { acceptOrRejectConversationActionCreator } from '../../store/actions/actions';
import './Chat.css';
import { fetchConversationActionCreator, createMessageActionCreator } from '../../store/actions/actions';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      messangeCount: 0,
    }
  }

  updateChat = () => {
    console.log('updating')
    this.props.getConversation(this.props.conversationID.conversationID, this.props.token)
  }

  componentDidMount() {
    this.nameInput.focus();
    this.timer = setInterval(() => {
      this.updateChat();
    }, 500000)
    if (this.props.conversation.status === 'unloaded' && this.props.conversationID.render) this.props.getConversation(this.props.conversationID.conversationID, this.props.token)
    this.scrollToBottom();
  }

  componentDidUpdate() {
    if (this.props.sentStatus.status === 201) {
      this.props.clear('CREATE_MESSAGE_CLEAR');
      this.props.getConversation(this.props.conversationID.conversationID, this.props.token);
    }
    if (this.props.conversation.status === 200 && this.state.messangeCount !== this.props.conversation.body.messages.length) {
      this.setState({messangeCount: this.props.conversation.body.messages.length});
      this.scrollToBottom();
    }
      
    
    
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.props.chatToggle()
    this.props.clear('FETCH_CONVERSATION_CLEAR')
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  renderMessages = () => {
    if (this.props.conversation.status === 'unloaded') return;
    if (!this.props.conversation.body.messages) return;
    return this.props.conversation.body.messages.map((el) => {
      
      if (el.message_creator_id === this.props.profile.body.pk_user_id) return this.message(
        'You', 
        el.message, 
        el.time_stamp, 
        this.props.profile.body.img_url
      );

      if (el.message_creator_id === this.props.conversation.body.fk_sender_user_id) return this.message(
        this.props.conversation.body.sender_name, 
        el.message, 
        el.time_stamp, 
        this.props.conversation.body.sender_img_url
      );

      else return this.message(
        this.props.conversation.body.skill_creator_name, 
        el.message, 
        el.time_stamp,
        this.props.conversation.body.skill_creator_img_url
      );
    }).reverse()
  }

  handleChange = (event) => {
    this.setState({input: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.input.length > 0) {
      this.props.sendMessage(this.state.input, this.props.conversationID.conversationID, this.props.token);
    }
    this.setState({input: ''});
  }

  message = (author, message, time, img) => {
    return (
      <div className='box' style={{marginLeft: '10px', marginRight: '10px', background: 'rgba(255, 255, 255, .8)'}}>
        <article className="media">

          <div className="media-left">
            <figure className="image is-32x32">
              <img src={img} alt="Image" className="is-circular"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <strong>{author}</strong> <small><Moment fromNow>{time}</Moment></small>
              <br/>
              <p className="subtitle">{message}</p>
            </div>
          </div>
        </article>
      </div>
    )
  }

  renderButton = () => {
    if (this.props.sentStatus.status === 'unloaded') return <input type="submit" value="Send" className='button' />;
    else return <a class="button is-loading">Send</a>
  }

  render () {
    return (
      <div className='container'> 
        <div className='' style={{overflow: 'hidden', paddingBottom: '70px'}}>
          {this.renderMessages()}
        </div>
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>

        <div className='navbar is-fixed-bottom' style={{marginLeft: '10px', marginRight: '10px', display: 'block'}}>
          <form onSubmit={this.handleSubmit} className=''>
            <label className='field has-addons'>
              <div className="control is-expanded">
                <input autoComplete="off" type='text' className='input' placeholder="say something" name='inputValue' value={this.state.input} onChange={this.handleChange} ref={(input) => { this.nameInput = input; }}/>
              </div>
              <div className="control">
                {this.renderButton()}
              </div>
            </label>
          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  conversationID: state.chatToggle,
  conversation: state.conversation,
  sentStatus: state.createMessage,
  profile: state.profile,
});
const mapDispatchToProps = (dispatch) => ({
  chatToggle: () => dispatch({type: 'CHAT_TOGGLE', conversationID: 0, render: false}),
  getConversation: (conversationID, userToken) => dispatch(fetchConversationActionCreator(conversationID, userToken)),
  clear: (actionType) => dispatch({type: actionType}),
  sendMessage: (message, conversationID, userToken) => dispatch(createMessageActionCreator(message, conversationID, userToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);