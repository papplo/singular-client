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
    },
    endpoint: '/conversation',
  }
});

const fetchProfileActionCreator = (userToken) => ({
  type: 'FETCH_PROFILE',
  [API]: {
    headers: {
      'Authorization': 'Bearer ' + userToken,
    },
    endpoint: '/me',
  }
})

const fetchUserActionCreator = (id) => ({
  type: 'FETCH_USER',
  [API]: {
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

const updateProfileActionCreator = (me, userToken) => ({
  type: 'UPDATE_PROFILE',
  [API]: {
    endpoint: `/me`,
    methdod: 'PUT',
    headers: {
      'Content-Type': 'Application/JSON',
      'Authorization': 'Bearer ' + userToken,
    },
    body: me,
  }
})

const createSkillActionCreator = (skill, userToken) => ({
  type: 'CREATE_SKILL',
  [API]: {
    endpoint: `/skills`,
    methdod: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
      'Authorization': 'Bearer ' + userToken,
    },
    body: skill,
  }
})

export {
  fetchProfileActionCreator,
  fetchLocationAction,
  fetchCategoriesAction,
  fetchSkillsActionCreator,
  fetchIdSkillActionCreator,
  fetchUserActionCreator,
  saveUserTokenActionCreator,
  updateProfileActionCreator,
  createSkillActionCreator
}
