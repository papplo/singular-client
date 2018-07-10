import { combineReducers } from 'redux';
import location from './reducers/locationReducer';
import token from './reducers/tokenReducer';
import chatToggle from './reducers/chatReducer';
import {
  categories,
  skills,
  createSkill,
  idSkill,
  genreSkills,
  profile,
  updateProfile,
  user,
  conversation,
  acceptOrRejectConversation,
  createReview,
  createMessage,
  createConversation,
  //TODO: deleteSkill,
} from './reducers/asyncDataReducer';

export default combineReducers({
  location, categories, skills, profile, genreSkills, idSkill, user, token, updateProfile, createSkill, acceptOrRejectConversation, chatToggle, conversation, createConversation, createMessage, createReview,
})
