const categoriesReducer = (state = {status: 'unloaded'}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
        return {status: 'loading'};
    case 'GET_CATEGORIES_FAILURE':
        return {status: 'failure'};
    case 'GET_CATEGORIES_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

export default categoriesReducer;