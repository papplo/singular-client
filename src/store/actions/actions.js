import { API } from '../../middleware/apiMiddleware';
import config from '../../config/config';

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

const fetchCategoriesAction = {
  type:'FETCH_CATEGORIES',
  [API]: {
    endpoint: '/categories',
  }
}

const fetchSkillsAction = (category = '') => {
  return {
    type:'FETCH_SKILLS',
    [API]: {
      endpoint: `/skills?location=CITY&category=${category}`,
      location: true,
    }
  }
  
}

export {
  fetchProfileAction,
  fetchLocationAction,
  fetchCategoriesAction,
  fetchSkillsAction
}
