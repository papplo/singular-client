import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import { ConversationCard } from '../../components/conversation/ConversationCard'
// import { acceptOrRejectConversationActionCreator } from '../../store/actions/actions';
import './Chat.css';




class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillUnmount() {
    this.props.chatToggle()
  }



  render () {
    return (
      <div>Im the chat
        <button onClick={this.props.chatToggle}>close</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});
const mapDispatchToProps = (dispatch) => ({
  chatToggle: () => dispatch({type: 'CHAT_TOGGLE', conversationID: 0, render: false}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);