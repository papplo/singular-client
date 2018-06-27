import { API } from '../../middleware/apiMiddleware';
import config from '../../config/config';

//CATEGORIES
const fetchCategoriesAction = {
  type:'FETCH_CATEGORIES',
  [API]: {
    endpoint: '/categories',
  }
}

//CONVERSATIONS
const fetchConversationsActionCreator = (userToken) => ({
  type:'FETCH_CONVERSATIONS',
  [API]: {
    headers: {
      'Authentication': userToken,
      'Content-Type': 'Application/JSON',
    },
    endpoint: '/conversation',
  }
});

const fetchProfileActionCreator = (userToken) => ({
  type: 'FETCH_PROFILE',
  [API]: {
    headers: {
      'Authentication': userToken,
      'Content-Type': 'Application/JSON',
    },
    endpoint: '/me',
  }
})

const fetchLocationAction = {
  type: 'FETCH_LOCATION',
  [API]: {
    externalUrl: config.geolookup_url,
  }
}

const fetchSkillsActionCreator = (location, category = '') => ({
    type:'FETCH_SKILLS',
    [API]: {
      endpoint: `/skills?location=${location.body.city}&category=${category}`,
    }
  
});

export {
  fetchProfileActionCreator,
  fetchLocationAction,
  fetchCategoriesAction,
  fetchSkillsActionCreator
}
