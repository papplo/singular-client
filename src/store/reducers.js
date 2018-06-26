import { combineReducers } from 'redux';

//import individual reducers here
import userLocationReducer from './reducers/userLocation';
import getCategories from './reducers/categories';
import getSkills from './reducers/skills';
import user from './reducers/User';

export default combineReducers({
  userLocationReducer, getCategories, getSkills, user
})
