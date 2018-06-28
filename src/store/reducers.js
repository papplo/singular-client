import { combineReducers } from 'redux';
import location from './reducers/Location';
import categories from './reducers/Categories';
import { skills, createSkill, idSkill, deleteSkill, genreSkills } from './reducers/Skills';
import { profile, updateProfile, user } from './reducers/User';
import { conversations, createConversation, acceptConversation, rejectConversation, createReview, createMessage} from './reducers/Conversation';

export default combineReducers({
  location, categories, skills, profile, genreSkills, idSkill, user
})
