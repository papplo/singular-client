import { combineReducers } from 'redux';

//import individual reducers here
import userLocationReducer from './reducers/userLocation';
import getCategories from './reducers/categories';

export default combineReducers({
  userLocationReducer, getCategories
})
