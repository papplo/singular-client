import { combineReducers } from 'redux';
import location from './reducers/locationReducer';
import token from './reducers/tokenReducer';
import {
  categories,
  skills,
  createSkill,
  idSkill,
  deleteSkill,
  genreSkills,
  profile,
  updateProfile,
  user,
  conversations,
  acceptOrRejectConversation,
  rejectConversation,
  createReview,
  createMessage,
} from './reducers/asyncDataReducer';

export default combineReducers({

  location, categories, skills, profile, genreSkills, idSkill, user, token, updateProfile, createSkill, conversations, createConversation,
  location, categories, skills, profile, genreSkills, idSkill, user, token, updateProfile, createSkill, acceptOrRejectConversation,

})
