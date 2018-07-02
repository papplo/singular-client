import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { ConversationCard } from '../../components/conversation/ConversationCard'
import { acceptOrRejectConversationActionCreator } from '../../store/actions/actions';
import './Inbox.css';




class Inbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonValue: 'chats',
    }
  }

  changeButtonValue = (value) => {
    this.setState({buttonValue: value});
  }

  renderOrRedirect = () => {
    if (this.props.profile.status !== 200) return <Redirect to='/login' />
    else {
      return (
        <div className='inboxContainer'>
          <div className='buttons'>
            <button onClick={() => this.changeButtonValue('chats')} className='chats'>Chats</button>
            <button onClick={() => this.changeButtonValue('requests')} className='requests'>Requests</button>
          </div>
          <div className='conversationContainer'>
            {this.renderConversations()}
          </div>
        </div>
      )
    }
  }

  renderConversations = () => {
    const conversationsToRender = []
    const conversationsStartedByMe = this.props.profile.body.conversationsStartedByMe;
    const conversationsStartedByOthers = this.props.profile.body.conversationsStartedByOthers;

    if (this.state.buttonValue === 'chats') {
      for (let i = 0; i < conversationsStartedByOthers.length; i++) {
        if (conversationsStartedByOthers[i].approved === 1) conversationsToRender.push(ConversationCard(conversationsStartedByOthers[i], 2))
      }
      for (let i = 0; i < conversationsStartedByMe.length; i++) {
        if (conversationsStartedByMe[i].approved === 1) conversationsToRender.push(ConversationCard(conversationsStartedByMe[i], 2))
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
});
const mapDispatchToProps = (dispatch) => ({
  putConversationStatus: (id, action, userToken) => dispatch(acceptOrRejectConversationActionCreator(id, action, userToken)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);