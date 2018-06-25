const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
        return state;
    case 'GET_CATEGORIES_SUCCESS':
    return action.data;
    default:
    return state

  }
}

export {categoriesReducer as default}
