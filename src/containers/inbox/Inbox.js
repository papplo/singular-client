import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { ConversationCard } from '../../components/conversation/ConversationCard'
import Chat from './../chat/Chat';
import { acceptOrRejectConversationActionCreator, fetchProfileActionCreator } from '../../store/actions/actions';
import './Inbox.css';
class Inbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonValue: 'chats',
    }
  }

  componentDidUpdate() {
    if (this.props.reRenderProfile.status === 200) {
      this.props.clear('ACCEPT_OR_REJECT_CONVERSATION_CLEAR')
      this.props.fetchProfile(this.props.token)
      
    }
  }

  changeButtonValue = (value) => {
    this.setState({buttonValue: value});
  }

  renderChatHeader = () => {
    if (this.props.renderChat.render) return (
      <nav class="breadcrumb panel-heading" aria-label="breadcrumbs">
        <ul>
          <li>
            <a onClick={this.props.chatToggleOff}>
              <span class="icon is-small">
                <i class="fas fa-chevron-left" aria-hidden="true"></i>
              </span>
              <span>Back</span>
            </a>
          </li>
        </ul>
      </nav>
    )
    return (
      <nav class="breadcrumb panel-heading" aria-label="breadcrumbs">
        <ul>
          <li>
            <a onClick={() => this.changeButtonValue('chats')}>
              <span class="icon is-small">
                <i class="fas fa-comments" aria-hidden="true"></i>
              </span>
              <span>Chats</span>
            </a>
          </li>
          <li>
            <a onClick={() => this.changeButtonValue('requests')}>
              <span class="icon is-small">
                <i class="fas fa-envelope" aria-hidden="true"></i>
              </span>
              <span>Requests</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }

  renderOrRedirect = () => {
    if (this.props.token === 0) return <Redirect to='/login' />
    else return (
      <div className='inboxContainer panel'>
        {this.renderChatHeader()}
        <div className='conversationContainer' style={{marginLeft: '10px', marginRight: '10px'}}>
          {this.renderConversations()}
        </div>
      </div>
    )    
  }

  renderConversations = () => {
    if (this.props.renderChat.render) {
      return <Chat></Chat>
    }
    if (this.props.profile.status !== 200) return null;
    const conversationsToRender = []
    const conversationsStartedByMe = this.props.profile.body.conversationsStartedByMe;
    const conversationsStartedByOthers = this.props.profile.body.conversationsStartedByOthers;

    if (this.state.buttonValue === 'chats') {
      for (let i = 0; i < conversationsStartedByOthers.length; i++) {
        if (conversationsStartedByOthers[i].approved === 1) conversationsToRender.push(ConversationCard(conversationsStartedByOthers[i], 2, this.props.chatToggle))
      }
      for (let i = 0; i < conversationsStartedByMe.length; i++) {
        if (conversationsStartedByMe[i].approved === 1) conversationsToRender.push(ConversationCard(conversationsStartedByMe[i], 2, this.props.chatToggle))
      }
    } else {
      for (let i = 0; i < conversationsStartedByOthers.length; i++) {
        if (conversationsStartedByOthers[i].approved === 0) conversationsToRender.push(ConversationCard(conversationsStartedByOthers[i], 1, this.props.putConversationStatus, this.props.token))
      }
      for (let i = 0; i < conversationsStartedByMe.length; i++) {
        if (conversationsStartedByMe[i].approved === 0) conversationsToRender.push(ConversationCard(conversationsStartedByMe[i], 0))
      }
    }
    return conversationsToRender;
  }

  render () {
    return (<div>{this.renderOrRedirect()}</div>)
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  token: state.token,
  renderChat: state.chatToggle,
  reRenderProfile: state.acceptOrRejectConversation,

});
const mapDispatchToProps = (dispatch) => ({
  putConversationStatus: (id, action, userToken) => dispatch(acceptOrRejectConversationActionCreator(id, action, userToken)),
  chatToggle: (conversationID) => dispatch({type: 'CHAT_TOGGLE', conversationID: conversationID, render: true}),
  chatToggleOff: () => dispatch({type: 'CHAT_TOGGLE', conversationID: 0, render: false}),
  fetchProfile: (userToken) => dispatch(fetchProfileActionCreator(userToken)),
  clear: (actionType) => dispatch({type: actionType})
});
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);