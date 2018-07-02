import { combineReducers } from 'redux';
import location from './reducers/locationReducer';
import token from './reducers/tokenReducer';
import chatToggle from './reducers/chatReducer';
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
  conversation,
  acceptOrRejectConversation,
  rejectConversation,
  createReview,
  createMessage,
} from './reducers/asyncDataReducer';

export default combineReducers({
  location, categories, skills, profile, genreSkills, idSkill, user, token, updateProfile, createSkill, acceptOrRejectConversation, chatToggle, conversation 
})
