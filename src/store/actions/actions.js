import { API } from '../../middleware/apiMiddleware';
import config from '../../config/config';

const fetchUserAction = {
  type: 'FETCH_USER',
  [API]: {
    headers: {
      'Authentication': 'lsakjdvoa97va3s2', //FacebookUserToken,
      'Content-Type': 'Application/JSON',
    },
    endpoint: '/me',
  }
}

const fetchUserLocationAction = {
  type: 'USER_LOCATION',
  [API]: {
    externalUrl: config.geolookup_url,
  }
}

const fetchCategoriesAction = {
  type:'GET_CATEGORIES',
  [API]: {
    endpoint: '/categories',
  }
}

const fetchSkillsAction = {
  type:'GET_SKILLS',
  [API]: {
    endpoint: '/skills?location=Barcelona',
  }
}


export {
  fetchUserAction,
  fetchUserLocationAction,
  fetchCategoriesAction,
  fetchSkillsAction
}
