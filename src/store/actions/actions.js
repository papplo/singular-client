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
const fetchConversationsAction = {
  type:'FETCH_CONVERSATIONS',
  [API]: {
    endpoint: '/categories',
  }
}

const fetchProfileAction = {
  type: 'FETCH_PROFILE',
  [API]: {
    headers: {
      'Authentication': 'lsakjdvoa97va3s2', //FacebookUserToken,
      'Content-Type': 'Application/JSON',
    },
    endpoint: '/me',
  }
}

const fetchLocationAction = {
  type: 'FETCH_LOCATION',
  [API]: {
    externalUrl: config.geolookup_url,
  }
}

const fetchSkillsActionCreator = (location, category = '') => {
  return {
    type:'FETCH_SKILLS',
    [API]: {
      endpoint: `/skills?${location.body.city}=CITY&category=${category}`,
    }
  }
  
}

export {
  fetchProfileAction,
  fetchLocationAction,
  fetchCategoriesAction,
  fetchSkillsActionCreator
}
