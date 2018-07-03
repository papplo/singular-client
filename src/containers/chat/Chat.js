import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import { ConversationCard } from '../../components/conversation/ConversationCard'
// import { acceptOrRejectConversationActionCreator } from '../../store/actions/actions';
import './Chat.css';
import { fetchConversationActionCreator, createMessageActionCreator } from '../../store/actions/actions';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  updateChat = () => {
    console.log('updating')
    this.props.getConversation(this.props.conversationID.conversationID, this.props.token)
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateChat();
    }, 5000)
    if (this.props.conversation.status === 'unloaded' && this.props.conversationID.render) this.props.getConversation(this.props.conversationID.conversationID, this.props.token)
  }

  componentDidUpdate() {
    if (this.props.sentStatus.status === 201) {
      this.props.clear('CREATE_MESSAGE_CLEAR');
      this.props.getConversation(this.props.conversationID.conversationID, this.props.token);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.props.chatToggle()
    this.props.clear('FETCH_CONVERSATION_CLEAR')
  }

  renderMessages = () => {
    if (this.props.conversation.status === 'unloaded') return;
    if (!this.props.conversation.body.messages) return;
    return this.props.conversation.body.messages.map((el) => {
      if (el.message_creator_id === this.props.profile.body.pk_user_id) return <p>{'You: ' + el.message}</p>
 
      if (el.message_creator_id === this.props.conversation.body.fk_sender_user_id) return <p>{this.props.conversation.body.sender_name + ': ' + el.message}</p>
      else return <p>{this.props.conversation.body.skill_creator_name + ': ' + el.message}</p>
    })
  }

  renderButtons = () => {
    return (
      <div>
        {/* <button onClick={this.handleSubmit}>Send</button> */}
        <button onClick={this.props.chatToggle}>Back</button>
      </div>
    )
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

  render () {
    return (
      <div>
        <div>
          {this.renderMessages()}
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input autoComplete="off" type='text' className='messageInput' placeholder="say something" name='inputValue' value={this.state.input} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Send" />
        </form>

        <div>
          {/* <input autoComplete="off" type='text' className='messageInput' placeholder="say something" name='inputValue' value={this.state.input} onChange={this.handleChange}/> */}
        </div>
        {this.renderButtons()}
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