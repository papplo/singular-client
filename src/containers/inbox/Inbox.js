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


// "conversationsStartedByMe": [
//   {
//       "pk_conversation_id": "5474df3d-d1e1-436d-90a1-2a40afa7531e",
//       "approved": 0,
//       "created_at": "2018-06-30T11:24:23.000Z",
//       "updated_at": "2018-06-30T11:24:23.000Z",
//       "fk_skill_id": "cd0a329a-aeb3-460c-9a1d-8682fee7dc9f",
//       "fk_sender_user_id": "7a5ace07-7e37-408b-97a3-ca9d846dc42b",
//       "skill_title": "Cuban Salsa moves",
//       "contact_name": "Pablo",
//       "contact_img_url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=190979358410536&height=200&width=200&ext=1530539824&hash=AeQ2Dyzx7hEE3EAq"
//   }
// ]

// "conversationsStartedByOthers": [
//   {
//       "pk_conversation_id": "3a35a30a-60db-4a6f-8004-96e84609e5a9",
//       "approved": 0,
//       "created_at": "2018-06-30T11:17:53.000Z",
//       "updated_at": "2018-06-30T11:17:53.000Z",
//       "fk_skill_id": "882260e9-f2a8-4f23-9782-1fc719d48db0",
//       "fk_sender_user_id": "29cda09d-3a3e-44b5-9250-70674d843d87",
//       "skill_title": "How to make 'pa amb tomaquet'",
//       "contact_name": "Christopher",
//       "contact_img_url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10157157275892366&height=200&width=200&ext=1530778472&hash=AeTICDFxiG4v-vF8"
//   },
//   {
//       "pk_conversation_id": "bd26e847-3199-4ae4-8582-5bdcd7f9d05e",
//       "approved": 0,
//       "created_at": "2018-06-30T11:18:49.000Z",
//       "updated_at": "2018-06-30T11:18:49.000Z",
//       "fk_skill_id": "882260e9-f2a8-4f23-9782-1fc719d48db0",
//       "fk_sender_user_id": "6fda3397-c2e0-42b5-8ba9-b1ee77966494",
//       "skill_title": "How to make 'pa amb tomaquet'",
//       "contact_name": "Pablo",
//       "contact_img_url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=190979358410536&height=200&width=200&ext=1530539824&hash=AeQ2Dyzx7hEE3EAq"
//   }
// ]