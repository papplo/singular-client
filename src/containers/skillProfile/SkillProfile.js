import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Link } from "react-router-dom";
import config from '../../config/config';
import pathParser from '../../services/pathparser';
import ModalFx from '../../services/modalFx';
import { CardMedia, AsyncComponent, Reviews, User  } from '../../components/';
import { fetchIdSkillActionCreator, fetchUserActionCreator, createConversationActionCreator, createReviewActionCreator, fetchProfileActionCreator } from '../../store/actions/actions';

import '../../style/modal-fx.css';


//PATH: root/skill_id
class SkillProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ' ',
      redirect: false,
      modalOpen: false,
      sendRequest: false
    };
  }


  componentWillMount() {
    this.initialize();
    // window.addEventListener("keyup", () => modalFx._keyHandling('a'));
  }

  componentDidUpdate() {
    if (this.props.skill.status === 200 && this.props.user.status === 'unloaded') {
      this.props.fetchUser(this.props.skill.body.fk_user_id)
    }

    if (this.props.skillCreated.status === 201) {
      this.props.clear('CREATE_CONVERSATION_CLEAR');
      this.props.fetchProfile(this.props.token);
    }
  }

  componentWillUnmount() {
    this.props.clear('ID_SKILL_CLEAR');
    this.props.clear('FETCH_USER_CLEAR');
  }

  initialize = async () => {
    const skillId = (await pathParser(this.props.location.pathname)).first;
    if (!skillId) return;
    this.props.idSkill(skillId);
  }

  handleChange = (event) => {
  this.setState({message: event.target.value});
}

  handleSubmit = (event) => {
    if(this.props.profile.status === 200) {
      event.preventDefault();
      const newMessage = {
      message: this.state.message,
      skillId: this.props.skill.body.pk_skill_id,
      userId: this.props.profile.body.pk_user_id
      }
      this.props.createConversation(newMessage, this.props.token);
      this.setState({ sendRequest: true })
    } else {
      this.setState({ redirect: (
        <Redirect to='/me'></Redirect>
      )})
    }
}

  handleView = () => {
    if(this.state.sendRequest === false) {
      return (
        <form className = 'popup_inner'>
          <textarea className="textarea" placeholder="Send a message with some kind words and what you are interested in" rows="6"
            value={this.state.message} onChange={this.handleChange} ></textarea>
          <div className="field is-grouped is-centered has-half-padding-top">
            <p className="control">
              <a onClick={() => this.setState({modalOpen: false})}
                className="button is-round is-medium is-error">Cancel</a>
            </p>
            <p className="control">
              <a onClick={this.handleSubmit} className="button is-round is-medium is-primary"
                type="submit">Request now</a>
            </p>
          </div>
        </form>
      )
    } else {
      return (
        <div>
        <p className="title is-5 has-text-centered">Thank you for the request!</p>
        <div className="field is-grouped is-centered has-half-padding-top">
        <p className="control">
          <Link className="button is-round is-medium is-error" to="/inbox"> Inbox </Link>
        </p>
        <p className="control">
          <Link className="button is-round is-medium is-primary" to="/"> Discover More </Link>
        </p>
      </div>
    </div>
      )
    }
  }

  createReview = (review, conversationId) => {
    this.props.createReview(review, conversationId, this.props.token)
  }

  render () {
    return (
      <div className="container">
        <div className="section has-half-padding">
          <User user={this.props.user}></User>
        </div>
        <div className="section has-half-padding-top">
          {AsyncComponent(this.props.skill.status, this.props.skill,
            <CardMedia
            skill={this.props.skill}
            user={this.props.user}/>
          )}
          <div className="field is-grouped is-centered has-half-padding-top">
            <p className="control">
              <a onClick={() => this.setState({modalOpen: true})} className="button is-round is-medium is-primary">
                Learn more
              </a>
            </p>
          </div>
        </div>

      <div className="container skill-reviews">
        <p className="subtitle has-text-centered is-size-12 ">
          What other people say...
        </p>
        <Reviews createReview={this.createReview} elem={this.props.skill} profile ={this.props.profile}/>
      </div>

      {AsyncComponent(this.props.skill.status, this.props.skill,
        <ModalFx
        onToggle={() => this.setState({modalOpen: !this.state.modalOpen})}
        open={this.state.modalOpen}
        content={this.props.skill}>
        <div>{this.handleView()}</div>
        <div>{this.state.redirect}</div>
        </ModalFx>
      )}
    </div>

    )
  }
}

const mapStateToProps = (state) => ({
  skill: state.idSkill,
  user: state.user,
  skills: state.genreSkill,
  profile: state.profile,
  token: state.token,
  skillCreated: state.createConversation,

});
const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (userToken) => dispatch(fetchProfileActionCreator(userToken)),
  idSkill: (id) => dispatch(fetchIdSkillActionCreator(id)),
  fetchUser: (id) => dispatch(fetchUserActionCreator(id)),
  clear: (actionType) => dispatch({type: actionType}),
  createConversation: (newMessage, userToken) => dispatch(createConversationActionCreator(newMessage, userToken)),
  createReview: (description, conversationId, userToken) => dispatch(createReviewActionCreator(description, conversationId, userToken))

});

export default connect(mapStateToProps, mapDispatchToProps)(SkillProfile);
