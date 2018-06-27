const categories = (state = {status: 'unloaded'}, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
        return {status: 'loading'};
    case 'FETCH_CATEGORIES_FAILURE':
        return {status: 'failure'};
    case 'FETCH_CATEGORIES_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

export default categories;