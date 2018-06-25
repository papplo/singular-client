
const userLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOCATION':
      return state;
    case 'USER_LOCATION_SUCCESS':
      return action.data;
      default:
      return state
  }
}

export { userLocationReducer as default}
