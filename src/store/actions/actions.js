import { API } from '../../middleware/apiMiddleware';
import config from '../../config/config';

const fetchCategoriesAction = {
  type:'FETCH_CATEGORIES',
  [API]: {
    endpoint: '/categories',
  }
}

const fetchConversationsActionCreator = (userToken) => ({
  type:'FETCH_CONVERSATIONS',
  [API]: {
    headers: {
      'Authorization': 'Bearer ' + userToken,
      'Content-Type': 'Application/JSON',
    },
    endpoint: '/conversation',
  }
});

const fetchProfileActionCreator = (userToken) => ({
  type: 'FETCH_PROFILE',
  [API]: {
    headers: {
      'Authorization': 'Bearer ' + userToken,
      'Content-Type': 'Application/JSON',
    },
    endpoint: '/me',
  }
})

const fetchUserActionCreator = (id) => ({
  type: 'FETCH_USER',
  [API]: {
    headers: {
      'Content-Type': 'Application/JSON',
    },
    endpoint: `/user/${id}`,
  }
})

const fetchLocationAction = {
  type: 'FETCH_LOCATION',
  [API]: {
    externalUrl: config.geolookup_url,
  }
}

const fetchIdSkillActionCreator = (id) => ({
  type:'ID_SKILL',
    [API]: {
      headers: {
        'Content-Type': 'Application/JSON',
      },
      endpoint: `/skills/${id}`,
    }
})

const fetchSkillsActionCreator = (location, category) => {
  if (category) {
    return {
      type:'FETCH_SKILLS_CATEGORY',
      [API]: {
        endpoint: `/skills?location=${location.body.city}&category_id=${category}`,
      }
    }
  } else {
    return {
      type:'FETCH_SKILLS',
      [API]: {
        endpoint: `/skills?location=${location.body.city}`,
      }
    }
  }
    
};

const saveUserTokenActionCreator = (userToken) => ({
  type: 'SAVE_TOKEN',
  token: userToken,
})

export {
  fetchProfileActionCreator,
  fetchLocationAction,
  fetchCategoriesAction,
  fetchSkillsActionCreator,
  fetchIdSkillActionCreator,
  fetchUserActionCreator,
  saveUserTokenActionCreator
}
