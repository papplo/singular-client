import { combineReducers } from 'redux';

//import individual reducers here
import userLocationReducer from './reducers/userLocation';

export default combineReducers({
  userLocationReducer,
})
